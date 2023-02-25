<template>
  <h1>Buscar Por Cedula</h1>
  <input v-model="cedula" type="text" />
  <button v-on:click="consultarCliente">Buscar</button>
   <button v-on:click="insertar">Insertar</button>
</template>

<script>
import { obtenerPorCedulaFachada,insertarFachada } from "../js/api_facturacion/ProcesarCliente.js";
export default {
  data() {
    return {
      cedula: null,
    }
  },

  methods: {
    consultarCliente() {
      obtenerPorCedulaFachada(this.cedula);
    },
    insertar(){
        const miCliente={
            nombre:"Dani",
            apellido:"Ordones",
            genero:"Masculino",
            email:"jl@uce.edu.ec",
            cedula:"111111"
        }
        insertarFachada(miCliente);
    }
  },
};
</script>

<style>
button {
  width: 60px;
  height: 25px;
}
</style>
