import { Injectable } from '@angular/core';
import Editora from '../models/editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'HarperCollins' },
    { codEditora: 2, nome: 'Companhia das Letras' },
    { codEditora: 3, nome: 'Suma' }
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora = (codEditora: number): string => {
    const e = this.editoras.find(ed => ed.codEditora === codEditora);
    return e ? e.nome : '';
  }
}
