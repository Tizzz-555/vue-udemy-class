const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    updateName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
  },
});

app.mount("#events");
