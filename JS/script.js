//codice attivazione vuejs

const{createApp}=Vue;

createApp({
    data(){
        return{
            //creo array per salvare mail
            listaMail:[],
           
        }
    },
    methods:{
        //importo api boolean mail 
        f_mail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response)=>  {
                const result=response.data;
                console.log(result.response)
                
                return result.response;
              
            })
        }

    },
    mounted(){
        //creo un ciclo che ripeta la funzione mail 10 volte 
        for (let i = 1; i <=10; i++) {
            let element= this.f_mail();
            
            this.listaMail.push(element)
        }

        console.log(this.listaMail)
    }
}).mount("#app");