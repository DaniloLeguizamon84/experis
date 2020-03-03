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
        <small>Seleccione una tecnología y haga clic en ver</small>
        <div class="input-group">
          <select class="form-control" v-model="idTecnologia">
            <option v-for="t in f.tecnologias" :value="t.id">{{t.nombre}}</option>
          </select>
          <button @click="buscar()" class="btn btn-info">Ver</button>
        </div>
      </div>
    </div>
    <div v-if="candidatos.length>0" class="container mt-3">
      <div class="row"  v-for="c in candidatos" v-if="mostrar(c.id)">
        <talento :info="c" />
      </div>
    </div>
  </div>
</template>
<script>
import talento from "./../../../components/talento.vue";
export default {
  data(){
    return{
      framework : this.$store.state.framework,
      idFramework: 0,
      idTecnologia: 0,
      candidatos:[],
      tipoCita: this.$store.state.tipoCita
    }
  },
  components:{
    talento
  },
  methods:{
    async buscar(){
      if(this.idFramework>0 && this.idTecnologia>0){
        let response = await this.$axios.$get('http://jsonplaceholder.typicode.com/users');
        console.log(response);
        this.$set(this,'candidatos',response);
        console.log(this.candidatos);
      }
      else{

      }
    },
    parImpar(valor){
      return (valor%2)?false:true;
    },
    mostrar(id){
      var parTec = this.parImpar(this.idTecnologia);
      var parId = this.parImpar(id);

      return (parId==parTec);

    }
  }
}
</script>
<style>
</style>