export class AuthMockService{
    login(){
        console.log('aca nos logueamos fake')
        return{
            name: 'FAKE USER',
            email: '...',
        }
    }
    verificarToken(){}
    obtenerUsuarioAutenticado(){

    }
}