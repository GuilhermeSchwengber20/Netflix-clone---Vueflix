import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);



let movieWatched = window.localStorage.getItem("movieWatched");

export default new Vuex.Store({
    state: {
        list: [],
        movieWatched: movieWatched ? JSON.parse(movieWatched) : []
    },

    mutations:{
        addToMyList(state, movie){
            console.log(state);
            let existMovie = state.list.find(current => current.imdbID == movie.imdbID);
            console.log(existMovie);
            if(!existMovie){
                return state.list.push(movie)
            }
        },

    },
    actions: {
            adicionarAlista({ commit }, movie){
                commit("addToMyList", movie);
        }
    }

})
