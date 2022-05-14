import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Create from './utils/create.js';

import Alert from './components/Alert.vue';

Vue.prototype.$Alert = ((obj)=>{//挂载在原型上
  return Create(Alert,obj).show(); //返回组件实例
})


Vue.config.productionTip = false

import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from "vant";
import { Icon } from 'vant';
import { Tag } from 'vant';

Vue.use(Tag);
Vue.use(Icon);

import 'vant/lib/index.css';

Vue.use(Form);
Vue.use(Field);
Vue.use(Button)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
