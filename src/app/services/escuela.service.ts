import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EscuelaService {

  escuela:any;
  cargando:boolean=true;

  constructor( private http:Http ) {
    this.cargar_info();
  }

  public cargar_info(){
      this.http.get('https://escuela-kik.firebaseio.com/Eshdei/index.json')
        .subscribe( res=>{
          this.escuela=res.json();
          console.log( this.escuela );
          this.cargando=false;
        });

  }

}
