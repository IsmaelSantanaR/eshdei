import { Component } from '@angular/core';
import { EscuelaService } from '../../services/escuela.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  constructor( private _es:EscuelaService ){

  }
}
