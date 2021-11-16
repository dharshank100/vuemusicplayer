<template>
  <div class="app-container p-3 bg-black m-auto">
    <SongList />
  </div>
</template>

<script>
import SongList from './components/SongList.vue';
import { onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import firebase from 'firebase';

 export default {
  name: 'App',
  components: {
    SongList
  },
  setup () {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/Login');
        } else if (route.path == "/Login" || route.path == "register") {
          router.replace('/');
        }
        });
      });
  }
}
</script>

<style>
.home {
  margin-top: 20%;

}
.app-container {
  width: 350px;
  height: 1100px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
}
</style>