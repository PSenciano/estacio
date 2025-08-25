import { Component, OnInit } from '@angular/core';
import Livro from '../models/livro';
import Editora from '../models/editora';
import { ControleLivrosService } from '../services/controle-livros.service';
import { ControleEditoraService } from '../services/controle-editora.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public livros: Array<Livro> = [];
  public editoras: Array<Editora> = [];

  constructor(
    private servLivros: ControleLivrosService,
    private servEditoras: ControleEditoraService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditoras.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  obterNome = (codEditora: number): string => {
    return this.servEditoras.getNomeEditora(codEditora);
  }

  excluir(codigo: number): void {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }
}
