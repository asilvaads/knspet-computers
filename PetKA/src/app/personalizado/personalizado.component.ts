import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personalizado',
  templateUrl: './personalizado.component.html',
  styleUrls: ['./personalizado.component.css']
})
export class PersonalizadoComponent {

  @Input() nome = "";
  @Input() sobrenome = "";


}
