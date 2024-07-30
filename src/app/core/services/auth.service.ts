import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(){
    console.log('aca nos logueamos')
    return{
        name: 'FAKE verdadero',
        email: '...',
    }
  }
  verificarToken(){}
  obtenerUsuarioAutenticado(){

  }
  
 





}
