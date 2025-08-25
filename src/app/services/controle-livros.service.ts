import { Injectable } from '@angular/core';
import Livro from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 101,
      codEditora: 1,
      titulo: 'Clean Code',
      resumo: 'Um guia de boas práticas para escrever código legível.',
      autores: 'Robert C. Martin'
    },
    {
      codigo: 102,
      codEditora: 2,
      titulo: 'O Programador Pragmático',
      resumo: 'Conselhos práticos para o dia a dia do desenvolvedor.',
      autores: 'Andrew Hunt\nDavid Thomas'
    },
    {
      codigo: 103,
      codEditora: 3,
      titulo: 'Arquitetura Limpa',
      resumo: 'Estruturando sistemas robustos e fáceis de manter.',
      autores: 'Robert C. Martin'
    }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  obterLivro(codigo: number): Livro | undefined {
    return this.livros.find(l => l.codigo === codigo);
  }

  incluir(livro: Livro): void {
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const idx = this.livros.findIndex(l => l.codigo === codigo);
    if (idx >= 0) {
      this.livros.splice(idx, 1);
    }
  }
}
