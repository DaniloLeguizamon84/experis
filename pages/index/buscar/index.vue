<template>
  <div class="container">
    <div class="col">
      buscar talento IT
    </div>
    <div class="row">
      <div class="col-sm-6">
        <small>Seleccione un framework</small>
        <select class="form-control" v-model="idFramework">
          <option v-for="f in framework" :value="f.id">{{f.nombre}}</option>
        </select>
      </div>
      <div v-for="f in framework" v-if="idFramework==f.id" class="col-sm-6">
        <small>Seleccione una tecnología</small>
        <select class="form-control">
          <option v-for="t in f.tecnologias" :value="t.id">{{t.nombre}}</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      framework : this.$store.state.framework,
      idFramework: 0
    }
  }
}
</script>
<style>
</style>