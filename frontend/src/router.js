
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import OrderManager from "./components/listers/OrderCards"
import OrderDetail from "./components/listers/OrderDetail"

import InventoryManager from "./components/listers/InventoryCards"
import InventoryDetail from "./components/listers/InventoryDetail"

import InventoryInfoView from "./components/InventoryInfoView"
import InventoryInfoViewDetail from "./components/InventoryInfoViewDetail"

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/orders',
                name: 'OrderManager',
                component: OrderManager
            },
            {
                path: '/orders/:id',
                name: 'OrderDetail',
                component: OrderDetail
            },

            {
                path: '/inventories',
                name: 'InventoryManager',
                component: InventoryManager
            },
            {
                path: '/inventories/:id',
                name: 'InventoryDetail',
                component: InventoryDetail
            },

            {
                path: '/inventoryInfos',
                name: 'InventoryInfoView',
                component: InventoryInfoView
            },
            {
                path: '/inventoryInfos/:id',
                name: 'InventoryInfoViewDetail',
                component: InventoryInfoViewDetail
            },


    ]
})
