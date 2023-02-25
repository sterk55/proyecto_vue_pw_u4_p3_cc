<template>
  <div>

<!--
<a href="/">Home</a>
<a href="/buscar">Buscar</a>
<a href="/insertar">Insertar</a>
<a href="/actualizar">Actualizar</a>
<a href="/eliminar">Eliminar</a>
-->
  <router-link to="/">Home</router-link>
  <router-link to="/buscar/">Buscar</router-link>
  <router-link to="/insertar">Insertar</router-link>
  <router-link to="/actualizar">Actualizar</router-link>
  <router-link to="/eliminar">Eliminar</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div a {
  color: blue;
  margin: 0 5px ;
  font-weight: bold;
}
div .router-link-active {
  color: green;
}
</style>