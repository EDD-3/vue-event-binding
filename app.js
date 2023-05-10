// document.querySelector('button').addEventListener();

const app = Vue.createApp({
  data() {
    return {
      counter: 10,
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
    setName(event) {

      this.name = event.target.value;
    },
    add(num) {
      this.counter+=num;
    },
    reduce(num) {
      this.counter-=num;
    },

    resetInput() {
      this.name =  '';
    }
  }
});

app.mount('#events');
