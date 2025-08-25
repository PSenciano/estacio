import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Livro from '../models/livro';
import Editora from '../models/editora';
import { ControleLivrosService } from '../services/controle-livros.service';
import { ControleEditoraService } from '../services/controle-editora.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro();
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servLivros: ControleLivrosService,
    private servEditoras: ControleEditoraService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditoras.getEditoras();
  }

  incluir(): void {
    if (!this.livro.titulo || !this.livro.resumo || !this.livro.codEditora) return;

    // gera um código simples caso não informado
    if (!this.livro.codigo) {
      this.livro.codigo = Date.now();
    }
    this.livro.autores = this.autoresForm || '';

    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}
