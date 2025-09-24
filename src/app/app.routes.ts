import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConsultorListComponent } from './consultores/consultor-list/consultor-list.component';
import { ConsultorFormComponent } from './consultores/consultor-form/consultor-form.component';
import { ConsultorDetalheComponent } from './consultor-detalhe/consultor-detalhe.component';
import { SobreComponent } from './sobre/sobre.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'consultores', component: ConsultorListComponent, canActivate: [AuthGuard] },
  { path: 'consultores/novo', component: ConsultorFormComponent, canActivate: [AdminGuard] },
  { path: 'consultores/editar/:id', component: ConsultorFormComponent, canActivate: [AdminGuard] },
  { path: 'consultor/:id', component: ConsultorDetalheComponent, canActivate: [AuthGuard] },
  { path: 'sobre', component: SobreComponent },
  { path: '**', redirectTo: 'login' }
];
