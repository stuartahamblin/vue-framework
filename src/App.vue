<template>
  <div id="app">
    <!--v-bind:class="{night: nightSwitch === true}"-->
    <div>
      <img class = "background_image" src="img/pexels-photo-681335.jpeg">
    </div>
    <a href="#" @click.stop="drawer = !drawer">
      <i class="small material-icons top-left">menu</i>
    </a>
    <!--<div class="switch top-right">-->
      <!--<div class="switch top-right">-->
        <!--<label>-->
          <!--<i class="small material-icons">wb_sunny</i>-->
          <!--<input-->
            <!--v-model="nightSwitch"-->
            <!--type="checkbox">-->
          <!--<span class="lever"></span>-->
          <!--<i class="small material-icons">brightness_3</i>-->
        <!--</label>-->
      <!--</div>-->
    <!--</div>-->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile @click="" to="/">
          <v-list-tile-content>
            <router-link to="/">Home</router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" to="/resume">
          <v-list-tile-content>
            <router-link to="/resume">Resume</router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" to="/projects">
          <v-list-tile-content>
            <router-link to="/projects">Projects</router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-title>Education</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="" href="https://codeup.com/">
            <v-list-tile-content>
              <a href="https://codeup.com/"> Codeup</a>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="" href="https://www.arizona.edu/">
            <v-list-tile-content>
              <a href="https://www.arizona.edu/"> University of Arizona</a>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        drawer: null,
        checkbox: true,
        radioGroup: 1,
        // nightSwitch: false
      }
    }
}
</script>

<style>
</style>
