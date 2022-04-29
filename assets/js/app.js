const app = new Vue({
    el:"#app",

    data:{

        userEmails: []

    },
    mounted(){

        for (let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(this);
                console.log(response);
                this.userEmails.push(response.data.response)
                
            })
    

        }


    }
})