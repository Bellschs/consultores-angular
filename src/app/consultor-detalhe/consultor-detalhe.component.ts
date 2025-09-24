import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ConsultorService } from '../services/consultor.service';
import { ConsultorModel } from '../models/consultor.interface';
import { AuthService } from '../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-consultor-detalhe',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container" *ngIf="consultor; else notFound">
      <a routerLink="/consultores">← Voltar</a>

      <section class="detalhe-card">
        <h1>{{ consultor.nome }}</h1>
        <p class="especialidade">{{ consultor.especialidade }}</p>

        <div class="info-grid">
          <p *ngIf="consultor.email"><strong>E-mail:</strong> {{ consultor.email }}</p>
          <p *ngIf="consultor.telefone"><strong>Telefone:</strong> {{ consultor.telefone }}</p>
          <p *ngIf="consultor.cidade"><strong>Cidade:</strong> {{ consultor.cidade }}</p>
          <p *ngIf="consultor.anosExperiencia != null">
            <strong>Experiência:</strong> {{ consultor.anosExperiencia }} ano(s)
          </p>
        </div>

        <div class="habilidades" *ngIf="consultor.habilidades?.length">
          <h3>Habilidades</h3>
          <ul>
            <li *ngFor="let h of consultor.habilidades">{{ h }}</li>
          </ul>
        </div>

        <p class="bio" *ngIf="consultor.bio">{{ consultor.bio }}</p>

        <!-- Botões só para admin -->
        <div class="acoes-admin" *ngIf="isAdmin">
          <a [routerLink]="['/consultores/editar', consultor.id]" class="btn-editar">Editar</a>
          <button class="btn-excluir" (click)="excluir()">Excluir</button>
        </div>
      </section>
    </div>

    <ng-template #notFound>
      <div class="container">
        <a routerLink="/consultores">← Voltar</a>
        <p>Consultor não encontrado.</p>
      </div>
    </ng-template>
  `,
  styles: [`
    .container { max-width: 900px; margin: 0 auto; padding: 20px; }
    .detalhe-card {
      border: 1px solid #e0e0e0; border-radius: 10px; background: #fff;
      padding: 20px; box-shadow: 0 3px 8px rgba(0,0,0,0.08);
    }
    h1 { margin: 0 0 4px 0; font-size: 1.6rem; }
    .especialidade { color: #0056b3; font-weight: 600; margin-bottom: 16px; }

    .info-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 8px 16px; margin: 16px 0;
    }
    .habilidades h3 { margin: 12px 0 6px; }
    .habilidades ul { padding-left: 18px; margin: 0; }
    .habilidades li { margin: 2px 0; }
    .bio { margin-top: 12px; color: #444; }

    .acoes-admin {
      margin-top: 20px;
      display: flex;
      gap: 12px;
    }
    .btn-editar {
      background: #ffc107;
      color: #333;
      padding: 6px 12px;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 500;
    }
    .btn-editar:hover { background: #e0a800; }
    .btn-excluir {
      background: #dc3545;
      color: #fff;
      padding: 6px 12px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 500;
    }
    .btn-excluir:hover { background: #c82333; }
  `]
})
export class ConsultorDetalheComponent {
  private route = inject(ActivatedRoute);
  private service = inject(ConsultorService);
  private auth = inject(AuthService);
  private router = inject(Router);

  consultor?: ConsultorModel;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.consultor = this.service.buscarPorId(id);
  }

  get isAdmin(): boolean {
    return this.auth.getUserRole() === 'admin';
  }

  excluir() {
    if (this.consultor && confirm(`Deseja excluir ${this.consultor.nome}?`)) {
      this.service.remover(this.consultor.id);
      this.router.navigate(['/consultores']);
    }
  }
}
