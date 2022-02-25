import { createApp } from 'vue'
import App from './App.vue'
// import vueMetaManager from './meta'
import { createMetaManager } from 'vue-meta'

import router from './router';

createApp(App).use(router).use(createMetaManager()).mount('#app')
