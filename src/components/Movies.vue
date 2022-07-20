<template>
    <div class="newMovies">
        <div class="slide">
            <h1>{{ description }}</h1>
            <div v-show="showLoading" id="LoadingMovie">
                <Spinner></Spinner>
            </div>
            <div class="movies">
                <div class="lista-filmes" v-for="movie in movies" :key="movie.title">
                    <img :src="movie.Poster" id="imagemPosterSlider" loading="lazy">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {Movies} from "../services/api";
import Spinner from "./Spinner.vue"

export default{
    name:"MovieVue",
    data(){
        return{
            showLoading: true,
            movies: [],
        }
    },
    props:{
        type: String,
        description: String,
    },
    components:{
        Spinner,

    },
    methods:{
        async getMovieDetail(){
            this.showLoading = true;
            try {
                const {data: {Search } } = await Movies(this.type).get();
                this.movies = Search;
                console.log();
            } catch (error) {
                console.log(error)
            } finally{
                this.showLoading = false;
            }
        },
    },
    mounted(){
        this.getMovieDetail();
        console.log(this.movies);
    }

}

</script>
<style>
.newMovies{
    width: 100%;
    height: 100%;
    text-align: center;
    margin: auto;
}
.newMovies h1{
    color: #cacaca;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 15px;
    padding-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.movies{
    display: flex;
    flex-direction: row;
    margin-top: 23px;
    padding-left: 20px;
    flex: 1;
}

.movies .lista-filmes #imagemPosterSlider{
    border-radius: 15px;
    width: 200px;
    transition: 0.5s;
    object-fit: contain;
    height: 300px;
    margin-bottom: 20px;
    padding: 5px;
}

.movies .lista-filmes img:hover{
    transform: scale(1.2);
    cursor: pointer;

}
</style>