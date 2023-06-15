/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCWPDWdHD8kCWo0fMNbWoDvZgUykrcuqEk",
    authDomain: "myapp-16e32.firebaseapp.com",
    databaseURL: "https://myapp-16e32-default-rtdb.firebaseio.com",
    projectId: "myapp-16e32",
    storageBucket: "myapp-16e32.appspot.com",
    messagingSenderId: "660345965344",
    appId: "1:660345965344:web:a19c2806c6217630afa545"
};

// Initialize Firebase
const app2 = initializeApp(firebaseConfig);


const db = getFirestore(app2);
const app = createApp(App)

registerPlugins(app)

app.mount('#app')

export default db;