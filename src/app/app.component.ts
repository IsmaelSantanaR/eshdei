import { Component } from '@angular/core';
import { EscuelaService } from './services/escuela.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _es:EscuelaService ){

  }

}
