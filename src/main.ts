import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import './style.css';
import App from './App.vue';
import { router } from './pages';
import 'ant-design-vue/dist/reset.css';

const store = createPinia();
store.use(piniaPluginPersistedstate);

createApp(App).use(Antd).use(store).use(router).mount('#app');
