import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  showCadastroCliente: boolean;
  showCadastroServico: boolean;

  constructor() { }

  public ngOnInit() {
    this.showCadastroCliente = true;
    this.showCadastroServico = false;
  }

  public toggleCadastroCliente() {
    this.showCadastroCliente = true;
    this.showCadastroServico = false;
  }

  public toggleCadastroServico() {
    this.showCadastroServico = true;
    this.showCadastroCliente = false;
  }

}
