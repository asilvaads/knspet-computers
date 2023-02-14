import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent {

   @Input() sobrenome = "";
   @Output() mostraNome = new EventEmitter();
   nome = "";
}
