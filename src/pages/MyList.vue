<template>
    <div>
        <div class="containerMyList">
            <div class="myListContent">
                <div  v-for="movie in this.$store.state.list" :key="movie.imdbID" id="movieFav">
                    <div class="posterBox">
                        <img :src="movie.Poster" id="img">
                    </div>
                    <div class="buttons">
                        <button id="removerAssistido" v-if="movies.includes(movie.imdbID)" @click="removeWatched(movie),  showToasted('desmarcar')">
                            <font-awesome-icon :icon="['fa', 'check']" class="icon alt" style="color: #00e500"></font-awesome-icon>
                            
                        </button>
                        <button id="marcarAssistido" title="Marcar Como Assistido" @click="markAsWatched(movie), checkIfWatched(), showToasted('marcar')" v-else> 
                            <font-awesome-icon :icon="['fa', 'check']" class="icon alt" style="color: #010"></font-awesome-icon>

                        </button>
                        <button id="removerLista" title="" @click="$store.commit('removeData', movie),  showToasted('remover')">
                            <font-awesome-icon :icon="['fa', 'trash']" class="icon alt" style="color: #f00"></font-awesome-icon>

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
        checkIfWatched(){
            this.$store.state.movieWatched.map(current => {
                this.movies.push(current.imdbID);
            })
        },
        showToasted(param){
            if(param == "marcar"){
                return this.$toasted.show("Marcou como assistido", {
                    theme: "toasted-primary", 
                    position: "top-right",
                    duration : 1500
                });
            }
            if(param == "desmarcar"){
                return this.$toasted.show("Removeu assistido", {
                    theme: "toasted-primary", 
                    position: "top-right",
                    duration : 1500
                });
            }
            if(param == "remover"){
                return this.$toasted.show("Removeu filme da sua lista", {
                    theme: "toasted-primary", 
                    position: "top-right",
                    duration: 1500
                });
            }
        },

    },
    mounted(){
        this.checkIfWatched()
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.buttons button{
    width: 100%;
    height: 30px;
    background: #333;
    border: none;
    outline: none;
    text-align: center;
}
.buttons button .icon{
    font-size: 18px;
}

</style>