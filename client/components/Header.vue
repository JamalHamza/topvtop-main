<template>
  <header class="fixed-header">
    <div class="container">
      <nav>
        <router-link  class="link" to="/login">Login</router-link>
        <router-link class="link" to="/register">Register</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped >
 .fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background-color: #024151;
  font-size: 24px;
  
} 

.link {
  color : red
}




</style>
