import { Component, inject, Input } from '@angular/core';
import { EnviaFormService } from '../../services/envia-form.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaInformacaoService = inject(EnviaFormService)
  meuBooleano = true;
  nome = "Vinicius";
  idButton = 11;
  exibirIdade = false;
  idade = 20;
  pessoas = [{nome: "Joao", idade: 22}, {nome: "Maria", idade: 19}, {nome: "Jose", idade: 22}]

  @Input() minhaProps!: string;

  upName(name: string){
    this.nome = name;
  }

  exibirIdadeFunc(valor: boolean){
    this.exibirIdade = true
  }

  atualizaBooleano(valor: boolean){
    this.meuBooleano = valor;
  }

  submit(data: object){
    this.enviaInformacaoService.enviaInformacao(data)
  }
}
