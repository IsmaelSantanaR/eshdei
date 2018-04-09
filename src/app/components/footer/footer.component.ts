import { Component } from '@angular/core';
import { EscuelaService } from '../../services/escuela.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anio:number=new Date().getFullYear();
  constructor( private _es:EscuelaService ){
    
  }

}
