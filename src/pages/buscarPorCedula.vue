<template>
  <h1>Buscar por Cedula</h1>
  <input v-model="cedula" type="text" name="" id="">
  <button @click="consultarClienteCed()">Buscar</button>
<button @click="insertar()">Insertar</button>
</template>

<script>
import {obtenerClienteporCedulaFachada, insertarFachada} from "../js/api_facturacion/ProcesarCliente.js"
export default {
    data(){
        return{
            cedula:""
        }
    },
    methods:{

        consultarClienteCed(){
            obtenerClienteporCedulaFachada(this.cedula)
        },

        insertar(){
            const miCliente={
                nombre: "Edison",
                apellido:"Cayambe",
                genero:"M"
            }
            insertarFachada(miCliente);
        }


    }
}
</script>

<style>

</style>