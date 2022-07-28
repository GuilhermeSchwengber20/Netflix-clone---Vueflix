import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let list = window.localStorage.getItem("list");

let movieWatched = window.localStorage.getItem("movieWatched");

export default new Vuex.Store({
    state: {
        list: list ? JSON.parse(list) : [],
        movieWatched: movieWatched ? JSON.parse(movieWatched) : []
    },

    mutations:{

        saveData(state){
            window.localStorage.setItem("list", JSON.stringify(state.list));
        },
        removeData(state, movie){
            let index = state.list.indexOf(movie);
            state.list.splice(index, 1);
            this.commit("saveData");
        },
        markMovie(state){
            window.localStorage.setItem("movieWatched", JSON.stringify(state.movieWatched));
        },
        removeWatched(state, movie){
            let WatchedRemove = state.movieWatched.indexOf(movie);
            state.movieWatched.splice(WatchedRemove, 1);
            this.commit("markMovie");
        }
    },
    actions: {
        addToMyList(state, movie){
            console.log(state);
            console.log(movie)
            let existMovie = state.list.find(
                current => console.log(current)

            );
            if(!existMovie){
                state.list.push(movie);
            }
            this.commit("saveData");
        },
    }

})
