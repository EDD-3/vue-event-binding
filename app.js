// document.querySelector('button').addEventListener();

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:''
    };
  },

  methods : {
    // Whenever a function is listening to an event it does not need to return a value
    setName(event) {

      this.name = event.target.value ;
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
