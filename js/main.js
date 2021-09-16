// generare 10 indirizzi email e stamparli in pagina
// all'interno di una lista.
// Bonus: Far comparire gli indirizzi email solamente
// quando sono stati tutti generati

Vue.config.devtools = true;

const app = new Vue (
    {
        el: "#root",
        data: {
            indirizzi: []
        },
        beforeCreate() {
            for (i=0; i<10; i++) {
                axios
                    .get ('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then ((result) => {
                        this.indirizzi.push(result.data.response)
                    });
            }
        }
    }
)