import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultorService } from '../../services/consultor.service';
import { ConsultorModel } from '../../models/consultor.interface';

@Component({
  selector: 'app-consultor-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './consultor-form.component.html',
  styleUrls: ['./consultor-form.component.scss']
})
export class ConsultorFormComponent implements OnInit {
  form!: FormGroup;
  editMode = false;
  consultorId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private consultorService: ConsultorService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: [''],
      especialidade: [''],
      email: ['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.consultorId = +id;
      const consultor = this.consultorService.buscarPorId(this.consultorId);
      if (consultor) {
        this.form.patchValue(consultor);
      }
    }
  }

  salvar() {
    const consultor: ConsultorModel = {
      id: this.editMode ? this.consultorId : 0,
      ...this.form.value
    };

    if (this.editMode) {
      this.consultorService.editar(consultor);
    } else {
      this.consultorService.adicionar(consultor);
    }

    this.router.navigate(['/consultores']);
  }

  cancelar() {
    this.router.navigate(['/consultores']);
  }
}
