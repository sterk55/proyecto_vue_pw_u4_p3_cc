<template>
  <h1>Insertar</h1>
</template>

<script>
export default {
  data(){
      return{
         
      };

   },
   mounted(){
        console.log("Entro a la pagina insertar")
        console.log(this.$route)
        console.log(this.$route.query)
        console.log(this.$route.query.ciudad)
        console.log(this.$route.query.edad)
        const {ciudad,edad}=this.$route.query
        console.log("Nuevas impresiones")
        console.log(ciudad)
        console.log(edad)
        
    }
}
</script>

<style>

</style>