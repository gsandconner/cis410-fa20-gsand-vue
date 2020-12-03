import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import StickerDetail from './components/StickerDetail.vue';
import Stickers from './components/Stickers.vue';
import NotFound from './components/NotFound.vue';
import PurchaseCreate from './components/PurchaseCreate.vue';
import SignUp from './components/SignUp.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account},
    {path: '/signin', component: Login},
    {path: '/Stickers', component: Stickers},
    {path: '/Stickers/:ID', component: StickerDetail,
        children: [
            {path: 'purchase', component: PurchaseCreate}
        ] },
    {path: '/signup', component: SignUp},
    {path: '/:invalidroute(.*)', component: NotFound}
]

export default new VueRouter({mode: 'history', routes}) 