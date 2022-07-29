<template>
    <div>

        <div id="Detail" class="detail">
            <div id="spinnerLoading">
                <div v-show="showLoading" id="loadingSpinner">
                    <Spinner />
                </div>
            </div>
            <div class="movieDetail">
                <div class="movieTitle" style="text-align: center; ">
                    <h1>{{movie.Title}}</h1>
                </div>
                <div id="iconsContainer">
                    <div id="starIcon">

                    </div>
                </div>
                <div id="movieImage">
                    <div class="image">
                        <img :src="movie.Poster">
                    </div>
                </div>
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
import Spinner from "../components/Spinner.vue"

export default{
    name:"DetailVue",
    data(){
        return{
            movie:[],
            showLoading: true,
            trailerID: ""
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
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
}

.movieDetail{
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 550px;
    align-items: center;
    justify-content: center;
}
.descriptionsContainer{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 65vh;
}

.containerMovie .containerBox{
    display: flex;
    width: 600px;
    border: 1px solid red;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    margin-top: 10px;
}


.button button{
    width: 600px;
    margin-top: 20px;
    padding: 10px;
    font-size: 1.2em;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid red;
}

.button button:hover{
    transition: 0.5s;
    background-color: red;
}


</style>