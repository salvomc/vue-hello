const { createApp } = Vue;

createApp({
        data() {
            return  {
                        greeting: '<h1>Hello Vue.js!</h1>',
                        img: 'https://picsum.photos/300/300'
                    }   
               }
          }).mount('#greeting');