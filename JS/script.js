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
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(response){
            const result=response.data;
            console.log(result)
        })
    }
}).mount("#app");