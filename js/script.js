var vm= new Vue({
    el:'#app',
    data:{
          ActiveBtn:false, //真偽値*//
     },
     methods:{
          BtnToggle:function(){
         this.ActiveBtn = !this.ActiveBtn  
     }
 }
 })
