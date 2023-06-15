<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>Cadastro de Carros</h1>
        <v-form>
          <v-text-field v-model="carros.nome" label="Nome" required></v-text-field>
          <v-text-field v-model="carros.marca" label="Marca" required></v-text-field>
          <v-btn color="primary" class="mr-2" @click="salvar">Salvar</v-btn>

        </v-form>
      </v-container>
      <v-container>
        <h1>Carros</h1>
        <v-row>
          <v-card v-for="carro in carros" :key="carro.id">
            <v-card-title>{{ carro.nome }}</v-card-title>
            <v-card-text>{{ carro.marca }}</v-card-text>
            <v-card-actions>
              <v-btn color="primary" class="mr-2" @click="deletar(carro.nome)">Deletar</v-btn>
              <v-btn color="primary" class="mr-2" @click="editar(carro)">Editar</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
        <v-spacer>
        <router-link to="/login">
        <v-btn color="primary" class="mt-10">Logout</v-btn>
        </router-link>
      </v-spacer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import db from '@/main';
import { doc, setDoc, deleteDoc, getDocs, collection } from "firebase/firestore";

export default {
  data() {
    return {
      carros: [],
    };
  },
  methods: {
    async salvar() {
      await setDoc(doc(db, "dbcarros", this.carros.nome), {
        nome: this.carros.nome,
        marca: this.carros.marca,
      });
      this.limpar();
      this.getCarros();
    },
    limpar() {
      this.carros.nome = '';
      this.carros.marca = '';
    },
    async getCarros() {
      const querySnapshot = await getDocs(collection(db, "dbcarros"));
      this.carros = querySnapshot.docs.map((doc) => doc.data());
    },
    async deletar(nome) {
      await deleteDoc(doc(db, "dbcarros", nome));
      this.getCarros();
    },
    editar(carro) {
      this.carros.nome = carro.nome;
      this.carros.marca = carro.marca;
    },
  },
  mounted(){
    this.getCarros();
  }
};
</script>
