export const state = () => ({
    framework:[
        {
            id: 1,
            nombre: 'Microsoft .Net',
            tecnologias: [
                {
                    id: 1,
                    nombre: 'Asp.Net'
                },
                {
                    id: 2,
                    nombre: 'MVVM'
                },
                {
                    id: 3,
                    nombre: 'Ado.Net'
                },
                {
                    id: 4,
                    nombre: 'Entity Framework'
                },
                {
                    id: 5,
                    nombre: 'LinQ'
                }
            ]
        },
        {
            id: 2,
            nombre: 'Oracle Java',
            tecnologias: [
                {
                    id: 1,
                    nombre: 'Java Server Pages'
                },
                {
                    id: 2,
                    nombre: 'Java Server Faces'
                },
                {
                    id: 3,
                    nombre: 'Enterprise Java Beans'
                },
                {
                    id: 4,
                    nombre: 'Java Percisetence Api'
                },
                {
                    id: 5,
                    nombre: 'Java Messaging Service'
                }
                
            ]
        }
    ],
    tipoEntrevista:[
        {
            id: 1,
            modalidad: 'Presencial'
        },
        {
            id: 2,
            modalidad: 'Telefónica'
        },
        {
            id: 3,
            modalidad: 'Remota'
        }
    ],
    entrevistas:[],
    horario:['08 am','09 am','10 am','11 am','12 am','02 pm','03 pm']
})

export const mutations = {
    agendar (state,obj) {
        state.entrevistas.push(obj);
        console.log(state.entrevistas);
    }
}