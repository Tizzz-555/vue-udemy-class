<template>
  <li>
    <div>
      <header>
        <h3>{{ resTitle }}</h3>
        <button>Delete</button>
      </header>
    </div>
  </li>
</template>

<script>
export default {
  props: ['resTitle'],
};
</script>
