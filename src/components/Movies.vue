<template>
    <div class="newMovies">
        <div class="slide">
            <h1>{{ description }}</h1>
            <div v-show="showLoading" id="LoadingMovie">
                <Spinner></Spinner>
            </div>
            <carousel
            :per-page="2"
            :navigate-to="1"
            :mouse-drag="true"
            :paginationEnabled="false"
            :navigationEnabled="true"
            :navigationClickTargetSize="3">
                <slide v-for="movie in movies" :key="movie.imdbID + Math.random()" id="movieDiv">
                <div @click="details(movie.imdbID)">
                    <img :src="movie.Poster" loading="lazy" id="imagemPosterSlider" @click="details(movie)">
                </div>
                </slide>
            </carousel>
        </div>
    </div>
</template>
<script>
import {Movies} from "../services/api";
import Spinner from "./Spinner.vue"
import { Carousel, Slide } from 'vue-carousel';


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
        Carousel,
        Slide
    },

    methods:{
        details(_id){
            console.log(_id);
            this.$router.push({name: "Detail", params: {id: _id} });    
        },
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
  

    }

}

</script>
<style>
.class{
    display: none;
}
.newMovies{
    width: 100%;
    height: 100%;
    text-align: center;
    margin: auto;
    overflow-x: hidden;
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

#movieDiv {
  margin-top: 23px;
  padding-left: 20px;
  flex: 1;
}

#imagemPosterSlider{
    border-radius: 15px;
    width: 200px;
    transition: 0.5s;
    object-fit: contain;
    height: 300px;
    margin-bottom: 20px;
    padding: 5px;
}

#imagemPosterSlider:hover{
    transform: scale(1.2);
    cursor: pointer;
}
</style>