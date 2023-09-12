import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import store from './store'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App).use(router).use(store);


//let gauthClientId = '14078427302-m13u9q7l47106unbgqfdhp147rr24843.apps.googleusercontent.com';

app.use(vue3GoogleLogin, {
  clientId: '14078427302-h5erms01ndal3eqt56bpme3337j4ka5i.apps.googleusercontent.com'
})
app.mount("#app");
