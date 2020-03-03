<template>
    <div class="card card-default w-100 mb-3">
        <div class="card-header">
            {{info.name}} - {{info.email}}
        </div>
        <div class="card-body">
            <div class="container">

                

                <div class="row">
                    <div class="w-100">
                        Street: {{info.address.street}}<br>
                        Suite: {{info.address.suite}}<br>
                        City: {{info.address.city}}<br>
                        ZipCode: {{info.address.zipcode}}<br>
                        GeoPos: ({{info.address.geo.lat}},{{info.address.geo.lng}})<br>
                        Entrevista Agendada: <span v-if="tieneEntrevista" class="text-success">SI</span><span v-else class="text-danger"><a href="#" @click.prevent="agendar=!agendar" class="text-danger">No, Haga clic aquí para agendar</a></span>
                    </div>
                    <div class="w-100" v-if="agendar">
                        <div class="alert text-center alert-warning">Programar Entrevista</div>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Fecha</label>
                                <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Hora</label>
                                <select class="form-control">
                                    <option v-for="h in horario">{{h}}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tipo Entrevista</label>
                                <select class="form-control">
                                    <option v-for="t in tipoEntrevista">{{t.modalidad}}</option>
                                </select>
                            </div>
                            <button type="submit" @click.prevent="registrar()" class="btn btn-primary">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["info"],
    data(){
        return{
            tipoEntrevista: this.$store.state.tipoEntrevista,
            horario: this.$store.state.horario,
            agendar: false
        }
    },
    methods:{
        registrar(){
            if(true){
                this.$store.dispatch("agendar",{a:true});
            }
        }
    },
    computed:{
        tieneEntrevista(){
            return false;
        }
    }
}
</script>