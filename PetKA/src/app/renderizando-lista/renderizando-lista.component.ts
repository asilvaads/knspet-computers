import { Component } from '@angular/core';
import { Celular } from '../types/Celular';


@Component({
  selector: 'app-renderizando-lista',
  templateUrl: './renderizando-lista.component.html',
  styleUrls: ['./renderizando-lista.component.css']
})
export class RenderizandoListaComponent {

  celulares: Celular[] = [
    { id: 1, nome:"Celular XL", descricao: "Celular porte XGrande", esgotado: false },
    { id: 2, nome:"Celular G", descricao: "Celular porte Grande", esgotado: false },
    { id: 3, nome:"Celular M", descricao: "Celular porte Medio", esgotado: true },
    { id: 4, nome:"Celular P", descricao: "Celular porte Pequeno", esgotado: false }
  ];



}
