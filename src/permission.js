import router from './router'
// import axios from 'axios'
import store from "./store";
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
//
// NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {

    if(store.getters.menus.length > 0 ){
        next();
    }else{
        const routes = await store.dispatch('generator')
        router.addRoutes(routes)
        sessionStorage.setItem('token','123123123')
        next({ ...to, replace: true })
    }


    // if (!sessionStorage.getItem('token')) {
    //     alert(1);
    //     const routes = await store.dispatch('generator')
    //    let state =  router.addRoutes(routes)
    //     alert(state)
    //     sessionStorage.setItem('token','123123123')
    //     next({ ...to, replace: true })
    // }else{
    //     alert(2)
    //     console.log(store.getters["menus"]);
    //     console.log(to);
    //     next()
    // }
    // if(!sessionStorage.getItem('token')){
    //
    //     const routes = await store.dispatch('generator')
    //
    //
    //     console.log(routes)
    //
    //     router.addRoutes(routes)
    //
    //     next({ ...to, replace: true })
    // }else{
    //     next('/')
    // }

    // NProgress.done()
})


router.afterEach(() => {
    // finish progress bar
    // NProgress.done()
})
