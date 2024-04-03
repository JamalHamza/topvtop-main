<template>
    <Header />
  <div class="container">
    <h2>Login</h2>
    <form class="form-container" @submit.prevent="login">
      <input type="text" v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit" :disabled="isLoginDisabled">Login</button>
    </form>
  </div>
</template>

<script>
export default {


  computed: {
    isLoginDisabled() {
      return !this.email || !this.password;
    }
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await $fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });

        if (response.ok) {
          // Navigate to protected route
          this.$router.push('/');
        } else {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
      } catch (error) {
        alert('Login failed. Please try again.');
        console.log(error)
      }
    }
  }
}
</script>


<style scoped >
.container {
  border-radius: 5px;
 
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.form-container {
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
    padding: 2rem 1rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 1px 

}

input[type="text"],
input[type="password"],
button {
  border-radius: 5px; 
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px
  border
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100% 
}

button:hover {
  background-color: #0056b3;
}
</style>