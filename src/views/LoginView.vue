<template>
    <v-container>
        <v-form>
            <h1>Login</h1>
            <v-text-field v-model="email" label="Email" required></v-text-field>
            <v-text-field v-model="password" label="Password" required type="password"></v-text-field>
            <v-spacer>
            <router-link to="/dashboard">
                <v-btn color="primary" class="mr-2" @click="login">Login</v-btn>
                <v-btn color="primary" class="mr-2" @click="google">Entre com o google</v-btn>
            </router-link>
            <router-link to="/register">
                <v-btn color="primary" class="mr-2">Cadastre-se</v-btn>
            </router-link>
            </v-spacer>
        </v-form>
    </v-container>
</template>
<script setup>
import { signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const login = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log('Logado com sucesso');
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
        });
}
const google = () => {
    signInWithPopup(getAuth(), new GoogleAuthProvider())
        .then(() => {
            console.log('Logado com sucesso');
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
        });
}
</script>