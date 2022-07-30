<template>
    <div>
        <NextReleases></NextReleases>
        <Movies :key="movie.id"  :type="movie.type" v-for="movie in movies" :description="movie.description"/>
        <footer style="text-align:center">
            <small style="color: #fff; ">Developed By <span><a href="https://github.com/GuilhermeSchwengber20" targer="_blank">Guilherme Schwenber</a></span> | 2022 ©</small>
        </footer>
    </div>

</template>
<script>
import Movies from "../components/Movies.vue"
import NextReleases from "../components/NextReleases.vue"
export default{
    name:"MainVue",
    components:{
    Movies,
    NextReleases
},
    computed:{
        movies(){
            return [
                {id: 1, type: "s=avengers", description: "Populares na Vueflix"},
                {id: 2, type: "s=harry", description: "Recomendados"},
                {id: 3, type: "s=fast", description: "Em alta"},
                {id: 4, type: "s=super", description: "Aventura"},
                {id: 5, type: "s=game", description: "Ficção"},
                {id: 6, type: "s=brain", description: "Para todas idades"},
                {id: 7, type: "s=all", description: "Família"}
            ]
        }
    }
}
</script>