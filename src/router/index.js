import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRouterMap = [
    {
        path: '/',
        redirect: '/index',
        name: '主页',
        hidden: true
    },
    {
        path: '/index',
        name: '首页',
        component: () => import('@/views/Index'),
        children: [
            {
                path: '/index/',
                name: '欢迎页',
                component: () => import('@/views/Welcome')
            },

            // ANT
            {
                path: '/index/ant-table',
                name: 'Ant-表格',
                component: () => import('@/views/antd/Table')
            },
            {
                path: '/index/ant-form',
                name: 'Ant-表单',
                component: () => import('@/views/antd/Form')
            },
            {
                path: '/index/ant-drawer',
                name: 'Ant-抽屉',
                component: () => import('@/views/antd/Drawer'),
                children: [
                    {
                        path: '/index/ant-drawer/',
                        name: 'layout',
                        component: () => import('@/views/antd/Drawer-Layout')
                    }
                ]
            },

            // ELE
            {
                path: '/index/ele-table',
                name: 'Ele-表格',
                component: () => import('@/views/element/Table'),
                children: [
                    {
                        path: '/index/ele-table/',
                        name: 'layout',
                        component: () => import('@/views/element/Table'),
                    }
                ]
            },
            {
                path: '/index/ele-form',
                name: 'Ele-表单',
                component: () => import('@/views/element/Form')
            },
            {
                path: '/index/ele-drawer',
                name: 'Ele-抽屉',
                component: () => import('@/views/element/Drawer'),
                children: [
                    {
                        path: '/index/ele-drawer/',
                        name: 'layout',
                        component: () => import('@/views/element/Drawer-Layout')
                    }
                ]
            },
        ]
    }
];

export default new VueRouter({
    routes: constantRouterMap
})
