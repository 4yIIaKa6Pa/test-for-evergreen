import Vue from 'vue';
import Router from 'vue-router';

import User from "./components/User/User";
import UsersList from "./components/UsersList/UsersList";

Vue.use(Router);

const router = new Router({
    routes: [
        { path: '/', component: UsersList },
        { path: '/:id', component: User }
    ]
});

export default router;