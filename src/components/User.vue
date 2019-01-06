<template>
    <div id="user">
      <div class="container">
        <div class = "container-fluid">
          <div class = "row">
            <div class="col s12 m12 l6">
              <img class="professional-photo center-align" src="img/Stuart Hamblin Headshot website.jpg">
            </div>
            <div class="home-text valign-wrapper col s12 m6 l6 xl6 offset-m3">
              <div class="centered">
                <h3>Stuart Hamblin</h3><hr>
                <p>Codeup Graduate</p>
                <p>Software Developer</p>
                <p>Mechanical Engineering Background</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!--<h3>The user</h3>-->
      <!--<p>My name is {{ username }}</p>-->
      <!--<app-info></app-info>-->
      <!--<p>This is a test</p>-->
</template>

<script>
    import Info from './Info.vue';

    export default {
      data(){
        return {
          username: 'Stuart'
        }
      },
      components: {
        'app-info': Info
      }
    }
</script>

<style scoped>
  p{
    font-style: italic;
  }
</style>
