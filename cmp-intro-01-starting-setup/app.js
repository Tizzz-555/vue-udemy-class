const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "lorenzo",
          name: "Lorenzo Peluffo",
          phone: "333 343534",
          email: "pelu@localhost.com",
        },
        {
          id: "matteo",
          name: " Matteo Roveretto",
          phone: "333 353536",
          email: "tiuz@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "lorenzo",
        name: "Lorenzo Peluffo",
        phone: "333 343534",
        email: "pelu@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
