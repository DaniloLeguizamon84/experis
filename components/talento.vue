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
                    <div class="w-100" v-if="agendar && !tieneEntrevista">
                        <div class="alert text-center alert-warning">Programar Entrevista</div>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Fecha</label>
                                <input type="date" v-model="agenda.fecha" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Hora</label>
                                <select class="form-control" v-model="agenda.hora">
                                    <option v-for="h in horario" :value="h" v-if="disponible(h)">{{h}}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tipo Entrevista</label>
                                <select class="form-control" v-model="agenda.tipo">
                                    <option v-for="t in tipoEntrevista" :value="t.id">{{t.modalidad}}</option>
                                </select>
                            </div>
                            <button type="submit" @click.prevent="registrar()" class="btn btn-primary">Registrar</button>
                            <div v-if="alerta.length>0" class="alert alert-danger mt-3">{{alerta}}</div>
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
            agendar: false,
            agenda:{
                fecha: '',
                tipo: 0,
                hora: ''
            },
            alerta:'',
            entrevistas: this.$store.state.entrevistas
        }
    },
    methods:{
        registrar(){
            if(this.agenda.fecha.length==10 && this.agenda.tipo>0 && this.agenda.hora.length>0){
                this.$store.commit("agendar",{candidato:this.$props.info,agenda:this.agenda});
            }
            else{
                this.setAlerta('Seleccione fecha y tipo de entrevista');
            }
        },
        setAlerta(msj){
            this.alerta = msj;
            setTimeout(()=>{
                this.alerta='';
            },4000);
        },
        disponible(hora){
            let n = this.entrevistas.length;
            for(let i=0; i<n; i++){
                let e = this.entrevistas[i];
                console.log(e.agenda.fecha,"==",this.agenda.fecha," && ",hora,"==",e.agenda.hora);
                if(e.agenda.fecha==this.agenda.fecha && hora==e.agenda.hora){
                    return false;
                }
            }
            return true;
        }
    },
    computed:{
        tieneEntrevista(){
            let n = this.entrevistas.length;
            for(let i=0; i<n; i++){
                let e = this.entrevistas[i];
                if(e.candidato.id==this.$props.info.id){
                    return true;
                }
            }
            return false;
        }
    }
}
</script>