import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
token:null,
user:null,
Stickers:[]
    },
    mutations:{
storeTokenInApp(state, myToken){
    state.token=myToken;
},
storeUserInApp(state,myUser){
    state.user=myUser 
},
storeStickers(state,myStickers){
    state.Stickers=myStickers
}
    },
    actions:{
        getStickers({commit}){
        axios.get('/Stickers')
        .then((myResponse)=>{
            console.log("repsonse from getStickers action", myResponse);
            commit('storeStickers', myResponse.data)
        })
        .catch(()=>{console.log("ERROR IN GETSTICKER ACTION")})
        }
    }
})