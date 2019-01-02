<template>
    <div id="user">
      <h3>The user</h3>
      <p>My name is {{ username }}</p>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          username: 'Max'
        }
      }
    }
</script>

<style scoped>
  p{
    font-style: italic;
  }
</style>
