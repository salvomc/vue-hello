const { createApp } = Vue;

createApp({
        data() {
            return  {
                        greeting: '<h1>Hello Vue.js!</h1>'
                    }   
               }
          }).mount('#greeting');