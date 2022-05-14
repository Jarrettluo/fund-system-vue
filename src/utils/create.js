import Vue from 'vue'

// 传入一个组件配置
// 创建它的实例，并且将它挂载到body上
// 返回组件实例
export default function create(Component, props) {//Component组件  props传进来的参数

    //方式一:使用Vue.extend创建
    const Ctor = Vue.extend(Component);
    //创建组件实例
    const comp = new Ctor({ propsData: props })
    //挂载
    comp.$mount();
    document.body.appendChild(comp.$el);//把元素追加到body后面
    //移除
    comp.remove = () => {
        document.body.removeChild(comp.$el) //移除元素
        comp.$destroy() //销毁
    }

    // // 方式二：new一个Vue
    // const vm = new Vue({
    //   render(h) {
    //     return h(Component, { props })
    //   }
    // }).$mount() // $mount()本质上将vdom=》dom

    // // 通过vm.$el获取生成的dom
    // document.body.appendChild(vm.$el)

    // // 删除函数
    // // 获取组件实例
    // const comp = vm.$children[0]

    // comp.remove = () => {
    //   document.body.removeChild(vm.$el)
    //   vm.$destroy()
    // }

    return comp
}