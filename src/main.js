import { createApp } from 'vue';

import 'bootstrap';
import './styles/app.scss';

import App from './App.vue';

import router from './router.js';

createApp(App)
    .use(router)
    .mount('#app');
