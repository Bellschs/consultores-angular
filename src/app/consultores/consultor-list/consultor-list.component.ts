import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConsultorService } from '../../services/consultor.service';
import { ConsultorModel } from '../../models/consultor.interface';
import { ConsultorComponent } from '../../consultor/consultor.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-consultor-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ConsultorComponent],
  templateUrl: './consultor-list.component.html',
  styleUrls: ['./consultor-list.component.scss']
})
export class ConsultorListComponent {
  consultores: ConsultorModel[] = [];
  consultoresFiltrados: ConsultorModel[] = [];
  especialidades: string[] = [];
  filtroArea = '';
  nomeDaEmpresa = 'TechConsult Solutions';

  constructor(
    private consultorService: ConsultorService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.carregarConsultores();
  }

  carregarConsultores() {
    this.consultores = this.consultorService.listar();
    this.especialidades = [...new Set(this.consultores.map(c => c.especialidade))];
    this.filtrar();
  }

  filtrar() {
    this.consultoresFiltrados = this.filtroArea
      ? this.consultores.filter(c => c.especialidade === this.filtroArea)
      : this.consultores;
  }

  excluir(id: number) {
    if (confirm('Tem certeza que deseja excluir este consultor?')) {
      this.consultorService.remover(id);
      this.carregarConsultores();
    }
  }

  get isAdmin(): boolean {
    return this.auth.getUserRole() === 'admin';
  }
}
