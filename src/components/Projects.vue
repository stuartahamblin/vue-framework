<template>
  <div class="container">
    <v-container
      fluid
      grid-list-md
    >
      <v-layout row wrap>
        <v-flex
          v-for="card in cards"
          v-bind="{ [`xs${card.sFlex}`]: true, [`md${card.MFlex}`]: true }"
          :key="card.title"
        >
          <v-card>
            <v-img
              :src="card.src"
              height="200px"
            >
              <v-container
                fill-height
                fluid
                pa-2
              >
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <p class="headline white--text" v-text="card.title"></p>
                    <p class="white--text" v-text="card.text"></p>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
    export default {
        show: false,
        name: "Projects",
      data: () => ({
        cards: [
          { title: 'Personal Website', text: 'Multi page web application developed with Vue.js framework.', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', sFlex: 12, MFlex: 12 },
          { title: 'Fixer Lister', text: 'Ad lister program where users can register create/edit/delete ads.', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', sFlex: 12, MFlex: 6 },
          { title: 'Contacts Manager', text: 'Java command line program where contacts can be created/edited/deleted from a database', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', sFlex: 12, MFlex: 6 },
          { title: 'Drone Home', text: 'Start up weekend demo website for emergency drone photography service', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', sFlex: 12, MFlex: 12 },
          { title: 'Coffee Project', text: 'Javascript rendered web app with dynamic search', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', sFlex: 12, MFlex: 6 },
          { title: 'Hangman Java Game', text: 'Java command line game where user guesses letters of a mystery word', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', XsFlex: 12, MFlex: 6 },
          { title: 'Tick Tac Toe Game', text: 'Two player game where users try to get three in a row', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', sFlex: 12, MFlex: 6 },
          { title: 'Codeup Project', text: 'Mobile responsive web app', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', sFlex: 12, MFlex: 6 }
        ]
      })
    }
</script>

<style scoped>

</style>
