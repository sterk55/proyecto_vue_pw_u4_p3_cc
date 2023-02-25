<template>
  <h1>Buscar Por Cedula</h1>
  <h2>{{ idPrueba }}</h2>
   <button v-on:click="procesarGuardado()">Procesar</button>
</template>

<script>
import { obtenerPorCedulaFachada,insertarFachada } from "../js/api_facturacion/ProcesarCliente.js";
export default {
  data() {
    return {
      cedula: null,
      idPrueba:null,
      id2:this.$route.params.idCliente,
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
    },
    procesarGuardado(){
         console.log(id)
      }
  },
  mounted(){
        console.log("Entro a la pagina buscar")
        console.log(this.$route)
        console.log(this.$route.params)
        const {idCliente}=this.$route.params
        console.log(idCliente)
        this.idPrueba=idCliente
    }
};
</script>

<style>
button {
  width: 60px;
  height: 25px;
}
</style>
