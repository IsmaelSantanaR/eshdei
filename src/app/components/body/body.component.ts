import { Component, OnInit } from '@angular/core';
import { EscuelaService } from '../../services/escuela.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor( private _es:EscuelaService ) { }

  ngOnInit() {
  }

}
