import scrollDir from './directives/scrollDir'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/main.scss";
import "./assets/scss/fonts.scss";



createApp(App)
    .directive('scrolto',scrollDir)
    .use(router)
    .mount("#app")
