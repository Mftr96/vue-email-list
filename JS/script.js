//codice attivazione vuejs

const{createApp}=Vue;

createApp({
    data(){
        return{
           
        }
    },
    methods:{

    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    }
}).mount("#app");