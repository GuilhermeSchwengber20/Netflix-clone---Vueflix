<template>
    <div>
        <div id="Detail">
            <div class="movieDetail">
                <div id="iconsContainer">
                    <div id="starIcon">

                    </div>
                    <div class="trailerIcon">
                        <p>Assista ao trailer</p>
                    </div>
                </div>
                <div id="videoContainer">

                </div>
            </div>
            <div class="descriptionsContainer">
                <div class="movieTitle">
                    <h1>{{movie.Title}}</h1>
                </div>
                <div id="spinnerLoading">
                    <div v-show="showLoading" id="loadingSpinner">
                        <Spinner/>
                    </div>
                </div>
                <div id="movieSynopsis">
                    <p>{{ movie.Plot }}</p>
                </div>
                <button id="myList" @click="addToMyList">
                    Adicionar a minha lista
                </button>
                <div id="descriptions">
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
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Movies } from "../services/api";
import { Trailer } from "../services/trailer";
import Spinner from "../components/Spinner.vue";

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
    }
}
</script>