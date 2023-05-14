// document.querySelector('button').addEventListener();

const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    //Using watchers for conditionals, timeouts and keeping attentiong at some detail
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    // Computed properties are name like data properties
    fullname() {
      return this.name === "" || this.lastName === ""
        ? ""
        : this.name + " " + this.lastName;
    },
  },

  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      // Prevents the form from being submitted.
      event.preventDefault();
      alert("Submitted!");
    },
    outputFullname() {
      return this.name === "" ?  "" :this.name + " " + "R";
    },
    // Whenever a function is listening to an event it does not need to return a value
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },

    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
