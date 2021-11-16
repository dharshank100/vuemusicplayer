import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0sRvYkfnn2aMZD2PKeKHK_d6PyN3QJIw",
    authDomain: "music-player-ed967.firebaseapp.com",
    projectId: "music-player-ed967",
    storageBucket: "music-player-ed967.appspot.com",
    messagingSenderId: "1029070937889",
    appId: "1:1029070937889:web:23da138a39a71f848fe860"
  };

  firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
