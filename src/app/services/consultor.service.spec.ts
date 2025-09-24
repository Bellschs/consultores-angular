import { Injectable } from '@angular/core';

export interface Consultor {
  id: number;
  nome: string;
  especialidade: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultorService {
  private consultores: Consultor[] = [
    { id: 1, nome: 'Maria Silva', especialidade: 'Desenvolvedor Web', email: 'maria@empresa.com' },
    { id: 2, nome: 'Lucas Souza', especialidade: 'Mobile', email: 'lucas@empresa.com' }
  ];

  constructor() {}

  listar(): Consultor[] {
    return this.consultores;
  }

  buscarPorId(id: number): Consultor | undefined {
    return this.consultores.find(c => c.id === id);
  }

  adicionar(consultor: Consultor): void {
    consultor.id = this.consultores.length > 0 ? Math.max(...this.consultores.map(c => c.id)) + 1 : 1;
    this.consultores.push(consultor);
  }

  editar(consultor: Consultor): void {
    const index = this.consultores.findIndex(c => c.id === consultor.id);
    if (index !== -1) {
      this.consultores[index] = consultor;
    }
  }

  remover(id: number): void {
    this.consultores = this.consultores.filter(c => c.id !== id);
  }
}
