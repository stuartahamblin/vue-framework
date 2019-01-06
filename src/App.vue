<template>
  <div id="app">
    <div class = "background_4image">
      <img class = "background_image" src="img/pexels-photo-681335.jpeg">
    </div>

    <!--<v-layout>-->
      <!--wrap-->
      <!--style="height: 200px;"-->
    <!--&gt;-->

      <!--toggle button-->
        <!--<v-layout>-->
          <a
            href="#"
            @click.stop="drawer = !drawer"
          >
          <i class="small material-icons top-left">menu</i>
          </a>
      <div class="switch top-right">
          <!--<i class="small material-icons">wb_sunny</i>-->
        <!--<label>-->
          <div class="switch top-right">
            <label>
              <i class="small material-icons">wb_sunny</i>
              <input
                v-model="switch1"
                type="checkbox">
              <span class="lever"></span>
              <i class="small material-icons">brightness_3</i>
            </label>
          </div>
          <!--<v-switch-->
            <!--:label="`Switch 1: ${switch1.toString()}`"-->
            <!--v-model="switch1"-->
          <!--&gt;</v-switch>-->
          <!--<input type="checkbox">-->
          <!--<span class="lever"></span>-->
        <!--</label>-->
          <!--<i class="small material-icons">brightness_3</i>-->
      </div>
        <!--</v-layout>-->
      <!--toggle button-->

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <!--<v-list class="pa-1">-->
          <!--<v-list-tile avatar>-->
            <!--<v-list-tile-avatar>-->
              <!--<img src="https://randomuser.me/api/portraits/men/85.jpg">-->
            <!--</v-list-tile-avatar>-->

            <!--<v-list-tile-content>-->
              <!--<v-list-tile-title>John Leider</v-list-tile-title>-->
            <!--</v-list-tile-content>-->
          <!--</v-list-tile>-->
        <!--</v-list>-->

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <!--<v-list-tile-->
            <!--v-for="item in items"-->
            <!--:key="item.title"-->
            <!--@click=""-->
          <!--&gt;-->
            <!--&lt;!&ndash;<v-list-tile-action>&ndash;&gt;-->
              <!--&lt;!&ndash;<v-icon>{{ item.icon }}</v-icon>&ndash;&gt;-->
            <!--&lt;!&ndash;</v-list-tile-action>&ndash;&gt;-->

            <!--<v-list-tile-content>-->
              <!--<router-link to="/">{{item.title}}</router-link>-->
              <!--&lt;!&ndash;<v-list-tile-title>{{ item.title }}</v-list-tile-title>&ndash;&gt;-->
            <!--</v-list-tile-content>-->
          <!--</v-list-tile>-->
          <v-list-tile>
            <v-list-tile-content>
              <router-link to="/">Home</router-link>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <router-link to="/blog">Blog</router-link>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <router-link to="/account">Account</router-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <!--<ul id = "slide-out" class = "sidenav">-->
          <!--<li><router-link to="/">Home</router-link></li>-->
          <!--<li><a href = "resume.html">Resume</a></li>-->
          <!--<li><a href = "projects.html">Projects</a></li> &lt;!&ndash;to be dropdown menu with external links&ndash;&gt;-->
          <!--<li><a href = "#">Education</a></li>-->
        <!--</ul>-->
      </v-navigation-drawer>
    <!--</v-layout>-->

    <!--<div class = "row">-->
      <!--<ul id = "slide-out" class = "sidenav">-->
        <!--<li><a href = "#">Home</a></li>-->
        <!--<li><a href = "resume.html">Resume</a></li>-->
        <!--<li><a href = "projects.html">Projects</a></li> &lt;!&ndash;to be dropdown menu with external links&ndash;&gt;-->
        <!--<li><a href = "#">Education</a></li>-->
        <!--<router-link to="/">Home</router-link>-->
        <!--<router-link to="/blog">Blog</router-link>-->
        <!--<router-link to="/account">Account</router-link>-->
      <!--</ul>-->
      <!--<a href="#" data-target="slide-out" class="sidenav-trigger top-left"><i class="small material-icons">menu</i></a>-->
      <!--<div class="switch top-right">-->
        <!--<label>-->
          <!--<i class="small material-icons">wb_sunny</i>-->
          <!--<input type="checkbox">-->
          <!--<span class="lever"></span>-->
          <!--<i class="small material-icons">brightness_3</i>-->
        <!--</label>-->
      <!--</div>-->
    <!--</div>-->
<!--&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;   -->
    <!--<div>-->
      <!--<router-link to="/">Home</router-link>-->
      <!--<router-link to="/blog">Blog</router-link>-->
      <!--<router-link to="/account">Account</router-link>-->
    <!--</div>-->
<!--&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
    <router-view></router-view>
    <!--<app-user></app-user>-->
  </div>
</template>

<script>
// export default {
//   name: 'app',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App'
//     }
//   }
// }
// export default {
  // data () {
  //   return {
  //     drawer: null,
  //     items: [
  //       { title: 'Home', icon: 'dashboard' },
  //       { title: 'Resume', icon: 'question_answer' },
  //       { title: 'Projects', icon: 'question_answer' }
  //     ]
  //   }
  // }
  export default {
    data () {
      return {
        drawer: null,
        checkbox: true,
        radioGroup: 1,
        switch1: true
      }
    }
}
</script>

<style>
</style>
