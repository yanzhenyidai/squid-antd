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
                        name: 'Ant-抽屉全局',
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
                        name: 'Ele-抽屉全局',
                        component: () => import('@/views/element/Drawer-Layout')
                    }
                ]
            },
            {
                path: '/index/viewerjs',
                name: 'ViewJS',
                component: () => import('@/views/viewerjs/Viewer')
            },
        ]
    },
    { path: '*', redirect: '/404', hidden: true }
];

export const defaultRouterMap = [
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },
];

// const createRouter = () => new VueRouter({
//     // mode: 'history', // require service support
//     scrollBehavior: () => ({ y: 0 }),
//     routes: []
// })
//
// const router = createRouter()
//
// // Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// export function resetRouter() {
//     const newRouter = createRouter()
//     router.matcher = newRouter.matcher // reset router
// }
//
// export default router

export default new VueRouter({
    routes: defaultRouterMap
})

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {

    return originalPush.call(this, location).catch((err) => err);

};
