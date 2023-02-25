<template>
   <h1>Buscar</h1>
   <h2>{{ id }}</h2>
   <button v-on:click="procesarGuardado()">Procesar</button>
</template>

<script>
export default {
   data(){
      return{
         id:null
      };

   },
   mounted(){
      console.log(this.$route)
      const {idCliente} = this.$route.params
      this.id = idCliente
   },
   methods:{
      procesarGuardado(){
         console.log(id)
      }
   }
}
</script>

<style>

</style>