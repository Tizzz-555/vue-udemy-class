const app = Vue.createApp({
  data() {
    return {
      user: "",
      userOne: false,
      userTwo: false,
      hidden: false,
      background: "",
    };
  },
  computed: {
    changeColor() {
      return { user1: this.userOne, user2: this.userTwo };
    },
    changeView() {
      return { hidden: this.hidden, visible: !this.hidden };
    },
  },
  methods: {
    setUser() {
      if (this.user === "user1") {
        this.userOne = true;
        this.userTwo = false;
      } else if (this.user === "user2") {
        this.userTwo = true;
        this.userOne = false;
      }
    },
    setView() {
      this.hidden = !this.hidden;
      console.log(this.hidden);
    },
  },
});

app.mount("#assignment");
