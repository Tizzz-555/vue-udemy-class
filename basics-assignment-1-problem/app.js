const app = Vue.createApp({
  data() {
    return {
      name: "Mattia",
      age: 36,
      imageUrl:
        "https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwY2F0fGVufDB8fDB8fHww&w=1000&q=80",
    };
  },
  methods: {
    randNum() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
