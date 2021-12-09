import Vue from 'vue'
import App from './App.vue'
import router from './router'

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
