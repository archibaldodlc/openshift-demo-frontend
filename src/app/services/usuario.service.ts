import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Usuario } from '../components/interfaces/usuario.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

  urlGetUsuarios = 'http://API_IP:8080/rest/usuarios';
  urlGetUsuario = 'http://API_IP:8080/rest/usuario';
  urlGetLogin = 'http://API_IP:8080/rest/login'

  constructor( private http: Http ) { }

  getUsuariosService(){
    return this.http.get( this.urlGetUsuarios)
            .map( res => {
                return res.json();
            });
  }

  getUsuarioService(key$: string){
    const url = `${ this.urlGetUsuario }/${ key$ }`;
    console.log(url);
    return this.http.get( url )
      .map( res => res.json() );
  }

  setUsuarioService(data$: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.urlGetUsuarios, data$, options)
      .map(res => {res.text})
  }

  setLoginService(data$: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.urlGetLogin, data$, options)
      .map(res => {res.text})
  }

}
