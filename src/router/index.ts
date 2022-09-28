import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Layout from "../views/Layout.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Layout,
    redirect:{name:"homeson"},
    children:[
      {
        path:"home",
        name:"homeson",
        component:() => import("@/views/HomeView.vue")
      }
    ]
  },
  {
    path:"/fenxiao",
    name:"fenxiao",
    component: Layout,
    redirect:{name:"type"},
    children:[
      {
        path:"type",
        name:"type",
        component:() => import("@/views/FenXiao.vue")
      }
    ]
    
  },
  {
    path:"/mycart",
    name:"mycart",
    component: Layout,
    redirect:{name:"cart"},
    children:[
      {
        path:"cart",
        name:"cart",
        component:() => import("@/views/MyCart.vue")
      }
    ]
    
  },
  {
    path:"/mine",
    name:"mine",
    component: Layout,
    redirect:{name:"detail"},
    children:[
      {
        path:"detail",
        name:"detail",
        component:() => import("@/views/MineView.vue")
      }
    ]
    
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
