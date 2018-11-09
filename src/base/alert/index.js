import vue from 'vue'
import alertComponent from './alert.vue'
const alertConstructor = vue.extend(alertComponent);
var alertDom=new alertConstructor({
  el: document.createElement('div'),
  data(){
    return {
      show:true
    }
  }
});
function alert(){
  alertDom.show=true;
  document.body.appendChild(alertDom.$el);
  console.log(alertDom);
}
function hide(){
  alertDom.show=false
}
function registryAlert() {
  // 将组件注册到 vue 的 原型链里去,
  // 这样就可以在所有 vue 的实例里面使用 this.$toast()
  vue.prototype.$alert = alert;
  vue.prototype.$hide = hide;
}
export default registryAlert

