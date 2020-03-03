<template>
  <div class="container">
    <div class="col">
      Visualizar Agenda
    </div>
    <div class="row">
      <div class="col-sm-6">
        <small>Seleccione fecha</small>
        <input @change="buscar()" class="form-control" type="date" v-model="fecha" />
      </div>
    </div>
    <table v-if="lista.length>0" class="table  table-bordered mt-3">
        <thead class="table-info">
            <tr>
                <td>Nombre</td>
                <td>E-mail</td>
                <td>Hora</td>
                <td>Tipo</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="l in lista">
                <td>{{l.candidato.name}}</td>
                <td>{{l.candidato.email}}</td>
                <td>{{l.agenda.hora}}</td>
                <td>{{getTipoEntrevista(l.agenda.tipo)}}</td>
            </tr>
        </tbody>
    </table>
    <div v-else class="alert alert-info mt-3">Sin resultados...</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      fecha: '',
      lista:[],
      tipoEntrevista:this.$store.state.tipoEntrevista
    }
  },
  methods:{
    buscar(){
        console.log("buscando...");
        this.lista.splice(0,this.lista.length);
        var agenda = this.$store.state.entrevistas;
        var n = agenda.length;
        for(var i =0; i<n; i++){
            console.log(agenda[i]);
            if(agenda[i].agenda.fecha==this.fecha){
                this.lista.push(agenda[i]);
            }
        }
    },
    getTipoEntrevista(id){
        let n = this.tipoEntrevista.length;
        for(var i=0; i<n; i++){
            if(this.tipoEntrevista[i].id==id){
                return this.tipoEntrevista[i].modalidad;
            }
        }
        return '';
    }
  }
}
</script>
<style>
</style>