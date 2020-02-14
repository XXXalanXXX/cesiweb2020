var app_form = new Vue({
  el:'#app_form',
  data:{
    name:'',
    firstname:'',
    mail:''
  },
  mounted() {
    if(localStorage.name) this.name = localStorage.name;
    if(localStorage.firstname) this.firstname = localStorage.firstname;
    if(localStorage.mail) this.mail = localStorage.mail;
  },
  methods:{
    persist() {
      localStorage.name = this.name;
      localStorage.firstname = this.firstname;
      localStorage.mail = this.mail;
    }

  }
})
var app_burger_menu = new Vue({
  el: '#app_burger_menu',
  data: {
    isActive:'False'
  },
  methods:{
    cloak: function(){
      if(this.isActive=='True'){
        this.isActive='False'
      }
      else this.isActive='True'
    }
  }
})
