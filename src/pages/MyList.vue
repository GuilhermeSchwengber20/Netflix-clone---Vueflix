<template>
    <div>
        <div class="containerMyList">
            <div class="myListContent">
                <div  v-for="movie in this.$store.state.list" :key="movie.imdbID" id="movieFav">
                    <div class="posterBox">
                        <img :src="movie.Poster" id="img">
                    </div>
                    <div class="buttons">
                        <button id="removerAssistido" v-if="movies.includes(movie.imdbID)" @click="removeWatched(movie)">
                            Remover Assistido
                        </button>
                        <button id="marcarAssistido" title="Marcar Como Assistido" @click="markAsWatched(movie), checkIfWatched()" v-else> 
                            Marcar Como Assistido
                        </button>
                        <button id="removerLista" title="" @click="$store.commit('removeData', movie)">
                            Remover da Minha Lista
                        </button>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
export default{
    name: "MyListVue",
    data(){
        return{
            movies: []
        }
    },
    methods:{
        markAsWatched(movie){
            this.$store.commit("markAsWatched", movie);
        },
        removeWatched(movie){
            this.$store.commit("removeWatched", movie);
            window.location.reload();

        },
        checkIfWatched() {
            this.$store.state.movieWatched.map(current => {
                this.movies.push(current.imdbID);
            })
        },


    },
    mounted(){
        this.checkIfWatched();
    }
}

</script>
<style>
.containerMyList{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.myListContent{
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 100%;
}
#movieFav{
    margin-left: 30px;
}
#img{
    height: 300px;
    width: 300px;
}
.buttons{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

}
button{
    height: 50px;
    background-color: transparent;
}
</style>