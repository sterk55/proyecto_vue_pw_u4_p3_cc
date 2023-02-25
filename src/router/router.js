import { createRouter, createWebHashHistory } from "vue-router";
/*
Carga inicial donde se trae todo
import Actualizar from '../pages/Actualizar'
import Insertar from '../pages/Insertar'
import Buscar from '../pages/buscarPorCedula'
import Eliminar from '../pages/Eliminar'
import Inicio from '../pages/Inicio'
import NoFound from '../pages/NoFound'

const routes=[
    {path:'/',component:Inicio},
    {path:'/actualizar',component:Actualizar},
    {path:'/insertar',component:Insertar},
    {path:'/buscar',component:Buscar},
    {path:'/eliminar',component:Eliminar},
    {path:'/:pathMatch(.*)*',component:NoFound}
    
]

*/


/* Carga perezosa donde se trae por demanda */

const routes = [
    {
        path: '/',
        component: ()=> import (/* webpackChunkName: "Inicio" */ '../pages/Inicio')
    },
    {
        path: '/actualizar',
        component: ()=> import (/* webpackChunkName: "Actualizar" */ '../pages/Actualizar')
    },
    {
        path: '/insertar',
        component:  ()=> import (/* webpackChunkName: "Insertar" */ '../pages/Insertar')
    },
    {
        path: '/buscar',
        component: ()=> import (/* webpackChunkName: "Buscar" */ '../pages/buscarPorCedula')
    },
    {
        path: '/eliminar',
        component: ()=> import (/* webpackChunkName: "Eliminar" */ '../pages/Eliminar')
    },
    {
        path: '/:pathMatch(.*)*',
        component: ()=> import (/* webpackChunkName: "NoFound" */ '../pages/NoFound')
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router