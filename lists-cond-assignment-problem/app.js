const app = Vue.createApp({
  data() {
    return {
      task: "",
      tasks: [],
      visible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.visible ? "Hide" : "Show";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
      console.log(this.tasks);
    },
    hideButton() {
      this.visible = !this.visible;
    },
  },
});

app.mount("#assignment");
