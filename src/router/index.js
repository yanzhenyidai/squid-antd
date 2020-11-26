import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index'
import Welcome from '../views/Welcome'
/*ANT*/
import AntTable from '../views/antd/Table'
import AntForm from '../views/antd/Form'
/*ELE*/
import EleTable from '../views/element/Table'
import EleForm from '../views/element/Form'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                {
                    path: '/index/',
                    name: 'welcome',
                    component: Welcome
                },

                // ANT
                {
                    path: '/index/ant-table',
                    name: 'table',
                    component: AntTable
                },
                {
                    path: '/index/ant-form',
                    name: 'form',
                    component: AntForm
                },

                // ELE
                {
                    path: '/index/ele-table',
                    name: 'table',
                    component: EleTable
                },
                {
                    path: '/index/ele-form',
                    name: 'form',
                    component: EleForm
                },
            ]
        }
    ]
})
