const app = Vue.createApp({
  data() {
    return {
      output: "",
    };
  },
  methods: {
    showAlert() {
      alert("This is not a drill!");
    },
    showOutput(event) {
      this.output = event.target.value;
    },
  },
});

app.mount("#assignment");
