import { Component } from '@angular/core';
import {UsuariosService} from "./services/usuarios.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private  usuariosService: UsuariosService) {
    this.usuariosService.obtenerUsuario()
      .subscribe( resp => {
        console.log(resp);
      },(err) => {
        console.log('error en el appComponent')
      })
  }
}
