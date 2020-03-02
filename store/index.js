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
    ]
})

export const mutations = {
    /*increment (state) {
        state.counter++
    }*/
}