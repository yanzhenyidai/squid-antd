import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index'
import Welcome from '../views/Welcome'
/*ANT*/
import AntTable from '../views/antd/Table'
import AntForm from '../views/antd/Form'
import AntDrawer from '../views/antd/Drawer'
import AntLayout from '../views/antd/Drawer-Layout'
/*ELE*/
import EleTable from '../views/element/Table'
import EleForm from '../views/element/Form'
import EleDrawer from '../views/element/Drawer'
import EleLayout from '../views/element/Drawer-Layout'

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
                {
                    path: '/index/ant-drawer',
                    name: 'drawer',
                    component: AntDrawer,
                    children: [
                        {
                            path: '/index/ant-drawer/',
                            name: 'layout',
                            component: AntLayout
                        }
                    ]
                },

                // ELE
                {
                    path: '/index/ele-table',
                    name: 'table',
                    component: EleTable,
                    children: [
                        {
                            path: '/index/ele-table/',
                            name: 'layout',
                            component: EleLayout
                        }
                    ]
                },
                {
                    path: '/index/ele-form',
                    name: 'form',
                    component: EleForm
                },
                {
                    path: '/index/ele-drawer',
                    name: 'drawer',
                    component: EleDrawer,
                    children: [
                        {
                            path: '/index/ele-drawer/',
                            name: 'layout',
                            component: EleLayout
                        }
                    ]
                },
            ]
        }
    ]
})
