<template>
    <div class="home">
      <h1>Список пользователей</h1>
      <div class="users-list">
        <UserCard
          v-for="user in users"
          :key="user.id"
          :user="user"
          @user-click="goToUserDetails"
        ></UserCard>
      </div>
    </div>
  </template>
  
  <script>
  import UserCard from '@/components/UserCard.vue';
  
  export default {
    name: 'Home',
    components: {
      UserCard,
    },
    data() {
      return {
        users: [],
      };
    },
    created() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          this.users = data;
        });
    },
    methods: {
      goToUserDetails(userId) {
        this.$router.push({ name: 'UserDetails', params: { id: userId } });
      },
    },
  };
  </script>
  
  <style scoped>
  .home {
    max-width: 1000px;
    margin: 40px auto;
    padding: 20px;
  }
  .home h1 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.5em;
    color: #333;
  }
  .users-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  </style>
  