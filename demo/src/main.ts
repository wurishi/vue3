import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

const demoList: string[] = [];
const demos = (require as any).context('./demos/', true, /\.vue$/);
demos.keys().forEach((key: any) => {
  const end = key.lastIndexOf('/') + 1;
  const cName = 'Demo_' + key.substring(end).split('.')[0];
  app.component(cName, demos(key).default || demos(key));
  demoList.push(cName);
});
app
  .use(store)
  .use(router)
  .mount('#app');

export default {
  app,
  demoList,
};
