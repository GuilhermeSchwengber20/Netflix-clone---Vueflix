<template>
    <div>

        <div id="Detail" class="detail">
            <div id="spinnerLoading">
                <div v-show="showLoading" id="loadingSpinner">
                    <Spinner />
                </div>
            </div>
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
                <p>Assista Ao Trailer</p>
                <youtube :video-id="this.trailerID" ref="youtube"></youtube>
            </div>
            <div class="descriptionsContainer" style="margin-right: 10px;">

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
                <div class="containerMovie">
                    <div class="containerBox">
                        <div class="synopse">
                            <p>{{movie.Plot}}</p>
                        </div>
                    </div>
                </div>
                <div class="button">
                    <button @click="addToMyList">
                        Adicionar A Minha Lista
                    </button>
                </div>
                <!-- <div id="descriptions">
                    <p>
                        Duração
                        <span>{{ movie.Runtime }}</span>
                    </p>
                    <p>
                        Gênero
                        <span>{{ movie.Genre }}</span>
                    </p>
                    <p>
                        Diretor
                        <span>{{ movie.Director }}</span>
                    </p>
                    <p>
                        Atores
                        <span>{{ movie.Actors }}</span>
                    </p>
                    <p>
                        Considerações
                        <span>{{ movie.Awards }}</span>
                    </p>
                    <p>
                        Produção
                        <span>{{ movie.Production }}</span>
                    </p>
                </div> -->
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
        Spinner
    },
    methods:{
        async getMovieDetail() {
            this.showLoading = true
            try {
                const {data} = await Movies(`i=${this.$route.params.id}`).get();
                this.movie = data;
                const responseTrailer = await Trailer(`${this.movie.Title}`).get();
                console.log(responseTrailer);
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
        // showToast() {
        //     this.$toast.open({
        //         message: "Adicionado em minha lista",
        //         type: "sucess",
        //         duration: 5000,
        //         dismissible: true,
        //         qeue: true,
        //         position: "top-right"
        //     })
        // }
    },
    mounted(){
        this.getMovieDetail();
        console.log(this.trailerID);
    }
}
</script>
<style>
*{
    padding: 0;
    margin: 0;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
}

.detail{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.videoContainer{
    align-items: flex-end;
}

</style>