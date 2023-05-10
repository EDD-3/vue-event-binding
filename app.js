// document.querySelector('button').addEventListener();

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:''
    };
  },

  methods : {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      // Prevents the form from being submitted.
      event.preventDefault();
      alert('Submitted!');
    },
    // Whenever a function is listening to an event it does not need to return a value
    setName(event, lastName) {

      this.name = event.target.value+ ' '+ lastName ;
    },
    add(num) {
      this.counter+=num;
    },
    reduce(num) {
      this.counter-=num;
    }
  }
});

app.mount('#events');
