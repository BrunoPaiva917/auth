<template>
    <v-container>
        <v-form>
            <h1>Register</h1>
            <v-text-field v-model="email" label="Email" required></v-text-field>
            <v-text-field v-model="password" label="Password" required type="password"></v-text-field>
            <v-btn color="primary" class="mr-2" @click="register">Registrar</v-btn>
            <v-spacer>
            <v-label class="pa-2">Já tem uma conta? Faça login</v-label>
            </v-spacer>
            <router-link to="/login">
                <v-btn color="primary" class="mr-2">Ir para login</v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>
<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
const email = ref('');
const password = ref('');
const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log(getAuth().currentUser);

        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
        });
}
const signInWithGoogle = () => {
}
</script>