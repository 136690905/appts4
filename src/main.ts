import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 移动端适配
import 'amfe-flexible';
// vant
import 'vant/lib/index.css';
import Vant from 'vant';
// css默认样式
import "@/style/index.css"

createApp(App).use(store).use(router).use(Vant)
.mount("#app");
