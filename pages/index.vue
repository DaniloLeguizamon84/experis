<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col-sm-4">
        <nuxt-link to="/" class="btn btn-sm btn-success w-100 mb-2">Inicio</nuxt-link>
        <nuxt-link to="/buscar" class="btn btn-sm btn-info w-100 mb-2">Buscar Talento</nuxt-link>
        <nuxt-link to="/visualizar" class="btn btn-sm btn-info w-100 mb-2">Visualizar Entrevistas</nuxt-link>
      </div>
      <div class="col-sm-8 border-info border-left">
        <div class="w-100 mb-3 text-center">
          <h3>Reclutador de talento IT.</h3>
        </div>
        <div class="row mt-3" >
          <nuxt-child />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    
  }
}
</script>
<style>
.container{
  margin-left: 0;
  margin-right: 0;
  max-width: 100%;
}
</style>
