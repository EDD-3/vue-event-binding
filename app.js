// document.querySelector('button').addEventListener();

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods : {
    // Whenever a function is listening to an event it does not need to return a value
    add(num) {
      this.counter+=num;
    },
    reduce(num) {
      this.counter-=num;
    }
  }
});

app.mount('#events');
