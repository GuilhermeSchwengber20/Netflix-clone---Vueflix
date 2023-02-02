<template>
    <div>

        <div id="Detail" class="detail">
            <div id="spinnerLoading">
                <div v-show="showLoading" id="loadingSpinner">
                    <Spinner />
                </div>
            </div>
            <div class="contentMovie">
                <div class="movieHeader">
                    <div class="movieTitle">
                        <h1>{{movie.Title}}</h1>
                    </div>
                    <div id="iconsContainer">
                        <div id="starIcon">
    
                        </div>
                    </div>
                </div>
                <div class="videoContainer">
                    <div clss="trailerItens" style="display: flex; flex-direction: row; gap: 5px; align-items: center;">
                        <div>
                            <font-awesome-icon :icon="['fa', 'ticket']" class="icon alt"></font-awesome-icon>
                        </div>
                        <div>
                            <p>Assista Ao Trailer</p>
                        </div>
                    </div>
                    <youtube :video-id="this.trailerID" ref="youtube"></youtube>
                </div>
            </div>
            <div class="descriptionsContainer">
                <div class="containerMovie">
                    <div class="containerBox">
                        <div class="synopse">
                            <p>{{movie.Plot}}</p>
                        </div>
                    </div>
                </div>
                <div class="containerMovie">
                    <div class="containerBox">
                        <div class="duracao">
                            <p>Duração:</p>
                        </div>
                        <div class="runTime">
                            <span>{{movie.Runtime}}</span>
                        </div>
                    </div>
                </div>
                <div class="containerMovie">
                    <div class="containerBox">
                        <div class="genero">
                            <p>Genero:</p>
                        </div>
                        <div class="runTime">
                            <span>{{movie.Genre}}</span>
                        </div>
                    </div>
                </div>
                <div class="containerMovie">
                    <div class="containerBox">
                        <div class="diretor">
                            <p>Diretor:</p>
                        </div>
                        <div class="runTime">
                            <span>{{movie.Director}}</span>
                        </div>
                    </div>
                </div>
                <div class="containerMovie">
                    <div class="containerBox">
                        <div class="atores">
                            <p>Atores:</p>
                        </div>
                        <div class="runTime">
                            <span>{{movie.Actors}}</span>
                        </div>
                    </div>
                </div>
                <div class="containerMovie">
                    <div class="containerBox">
                        <div class="consideracao">
                            <p>Considerações:</p>
                        </div>
                        <div class="runTime">
                            <span>{{movie.Awards}}</span>
                        </div>
                    </div>
                </div>
                <div class="containerMovie">
                    <div class="containerBox">
                        <div class="producao">
                            <p>Produção:</p>
                        </div>
                        <div class="runTime">
                            <span>{{movie.Production}}</span>
                        </div>
                    </div>
                </div>
                <div class="button">
                    <button @click="addToMyList" class="addButon">
                        Adicionar A Minha Lista
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { Movies } from "@/services/api";
import { Trailer } from "@/services/trailer"
import Spinner from "../components/Spinner.vue"

export default{
    name:"DetailVue",
    data(){
        return{
            movie:[],
            showLoading: true,
            trailerID: "",
        }
    },
    components:{
        Spinner,
        
    },
    methods:{
        async getMovieDetail() {
            this.showLoading = true
            try {
                const {data} = await Movies(`i=${this.$route.params.id}`).get();
                this.movie = data;
                const responseTrailer = await Trailer(`${this.movie.Title}`).get();
                this.trailerID = responseTrailer.data.items[0].id.videoId;
            } catch (error) {
                console.log(error)
            }finally{
                this.showLoading = false;
            }
        },
        addToMyList() {
            this.$store.dispatch("adicionarAlista", this.movie);
        },
    },
    mounted(){
        this.getMovieDetail();
    }
}
</script>
<style>
*{
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}

.detail{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #fff;
    gap: 20px;
    flex-direction: row;
}
.contentMovie{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: flex-start;
}

.descriptionsContainer{
    display: flex;
    width: 100%;
    max-width: 645px;
    height: 95vh;
    flex-direction: column;
    justify-content: center;
}

.containerBox{
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
}
.containerBox{
    border: 1px solid red;
    margin-top: 10px;
}
.button .addButon{
    margin-top: 10px;
    width: 100%;
    border: 1px solid red;
    border-radius: 10px;
    font-size: 1.2em;
    padding: 10px;
    background: transparent;
    color: #fff;

}

.button .addButon:hover{
    background-color: red;
    transition: 0.8s;
}

.trailerItens{
    display: flex;
    flex-direction: row;
}

</style>