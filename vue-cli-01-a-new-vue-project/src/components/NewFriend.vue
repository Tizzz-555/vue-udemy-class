<template>
  <form @submit.prevent="submitForm">
    <div>
      <label>Name</label>
      <input
        type="text"
        placeholder="name"
        v-model="enteredName"
      />
    </div>
    <div>
      <label>Phone</label>
      <input
        type="text"
        placeholder="phone"
        v-model="enteredPhone"
      />
    </div>
    <div>
      <label>Email</label>
      <input
        type="text"
        placeholder="email"
        v-model="enteredEmail"
      />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitForm() {
      const contactData = {
        name: this.enteredName,
        phone: this.enteredPhone,
        email: this.enteredEmail,
      };
      this.$emit("add-contact", contactData);
    },
  },
};
</script>
