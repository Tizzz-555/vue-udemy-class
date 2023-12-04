const app = Vue.createApp({
  data() {
    return {
      courseGoal: ["Finish course", "Master Vue"],
      link: "https://www.google.com",
    };
  },
  methods: {
    chooseGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoal[0];
      } else {
        return this.courseGoal[1];
      }
    },
  },
});

app.mount("#user-goal");
