<template>
    <div class="user-card" @click="handleClick">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserCard',
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
    methods: {
      handleClick() {
        this.$emit('user-click', this.user.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .user-card {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 20px;
    margin: 15px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .user-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  }
  .user-card h2 {
    margin: 0 0 10px;
    font-size: 1.8em;
    color: #333;
  }
  .user-card p {
    margin: 0;
    font-size: 1em;
    color: #777;
  }
  </style>
  