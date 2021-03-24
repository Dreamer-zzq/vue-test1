import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false

new Vue({
    el: '#app',
    data:{
      isShow: false,
      isTrue: true,
      name: '',
      age: '',
      user:[
        
      ]
    },
    methods:{
      add(obj){
        this.user.push(obj);
        obj.name = this.name;
        obj.age = this.age;
        // this.name = '';
        // this.age = '';
        this.isShow = true;
        this.isTrue = false;
        this.resert();
      },
      resert(){
        this.name = '';
        this.age = '';
      },
      del(index){
        this.user.splice(index,1);
        if(this.user.length == 0){
          this.isShow = false;
          this.isTrue = true;
        }
      },
      delAll(){
        this.user.splice(0,this.user.length)
        this.isTrue = true;
        this.isShow = false;
      }
      
    }
})
