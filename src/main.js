import Vue from 'vue';
import Framework7 from 'framework7';
import Framework7Vue from 'framework7-vue';
import Framework7Icons from 'framework7-icons/css/framework7-icons.css';
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css';
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css';
import AppStyles from './css/app.css';
import Routes from './routes';
import App from './app';
import { store } from './store'

Vue.use(Framework7Vue);


new Vue({
  el: '#app',
  template: '<app/>',
  store,
  framework7: {
    root: '#app',
    routes: Routes,
  },
  components: {
    app: App,
  },
});

