import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { ConsultorModel } from '../models/consultor.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-consultor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './consultor.component.html',
  styleUrls: ['./consultor.component.scss'] 
})
export class ConsultorComponent {
  @Input() consultor!: ConsultorModel;
  @Output() excluir = new EventEmitter<number>();

  constructor(private auth: AuthService) {}

  get isAdmin(): boolean {
    return this.auth.getUserRole() === 'admin';
  }

  remover() {
    this.excluir.emit(this.consultor.id);
  }
}
