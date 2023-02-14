import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent {

  nome = "Roberta";
  dataNascimento = "1990-10-12";
  urlImagem = "/assets/Beta.jpg";

  mostrarData(){
    alert(`A data é: ${this.dataNascimento}`);
  }

}
