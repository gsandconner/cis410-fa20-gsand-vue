import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js'
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
},
clearAuthData(state){
    state.token =null;
    state.user =null;
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
        },
        logout({commit, state}){
            axios.post("/Customer/logOut",null,{
                headers:{
                    Authorization: `Bearer ${state.token}`
                }
            });
            commit('clearAuthData');

            routes.replace("/");

        }
    }
})