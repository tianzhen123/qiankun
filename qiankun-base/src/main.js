import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import { registerMicroApps, start } from "qiankun";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


const apps = [
  {
    name: "vueapp",
    entry: "http://localhost:10000", // 默认会加载这个html,解析里面的js动态的执行(子应用必须支持跨域)fetch请求
    container: "#container",
    activeRule: "/vue",
    props: { a: 1 } // 给子应用传参 例如vuex/redux
  },
  {
    name: "reactapp",
    entry: "http://localhost:20000",
    container: "#container",
    activeRule: "/react",
    props:{a:2}
  },
];
registerMicroApps(apps); // 注册应用
start();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
