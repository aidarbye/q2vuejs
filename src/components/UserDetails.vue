<template>
    <div v-if="user" class="user-details">
      <h1>Детали пользователя</h1>
      <UserCard :user="user">
        <button class="edit-button" @click.stop="isEditing = !isEditing">
          {{ isEditing ? 'Отменить' : 'Редактировать' }}
        </button>
      </UserCard>
  
      <div v-if="isEditing" class="edit-form">
        <h2>Редактировать имя пользователя</h2>
        <form @submit.prevent="saveName">
          <input v-model="user.name" required />
          <button type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div v-else>
      <p>Загрузка данных пользователя...</p>
    </div>
  </template>
  
  <script>
  import UserCard from '@/components/UserCard.vue';
  
  export default {
    name: 'UserDetails',
    components: {
      UserCard,
    },
    props: ['id'],
    data() {
      return {
        user: null,
        isEditing: false,
      };
    },
    created() {
      fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
        .then((response) => response.json())
        .then((data) => {
          this.user = data;
        });
    },
    methods: {
      saveName() {
        if (this.user.name.trim() === '') {
          alert('Имя не может быть пустым.');
          return;
        }
        console.log('User name saved:', this.user.name);
        this.isEditing = false;
      },
    },
    unmounted() {
      console.log('Компонент UserDetails уничтожен.');
    },
  };
  </script>
  

  
  <style scoped>
  .user-details {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
  }
  .user-details h1 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.5em;
    color: #333;
  }
  .edit-button {
    background-color: #ff9800;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    font-size: 1em;
    cursor: pointer;
    margin-top: 15px;
    transition: background-color 0.3s;
  }
  .edit-button:hover {
    background-color: #e68900;
  }
  .edit-form {
    margin-top: 30px;
  }
  .edit-form h2 {
    font-size: 1.5em;
    margin-bottom: 15px;
    color: #333;
  }
  .edit-form input {
    width: 100%;
    padding: 12px 15px;
    font-size: 1em;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  .edit-form button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 10px 15px;
    font-size: 1em;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .edit-form button:hover {
    background-color: #43a047;
  }
  </style>
  