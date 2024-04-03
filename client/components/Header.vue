<template>
  <header class="fixed-header">
    <div class="link">
      <NuxtLink to="/login">
    Login 
  </NuxtLink>
  <NuxtLink to="/register">
    Register
  </NuxtLink>
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
  
  display: flex;
  width: 14rem;
  justify-content: space-around;
  text-align: center;


  
}

.link a {
  color : rgb(248, 248, 248);
  padding: 4px 4px;
  border-radius: 10px;
  text-decoration :'none'
}




</style>
