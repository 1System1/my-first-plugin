import HelloWorld from "../src/components/hello-word/index.js"
import HelloShj from "../src/components/hello-shj/index.js"
import Vue from "vue";
const components =[
  HelloWorld,
  HelloShj
]


// 这里的判断很重要

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && Vue) {
  console.log('进入if-----------',window.Vue)
  install(Vue);
}

export default {
  HelloWorld,
  HelloShj
}
