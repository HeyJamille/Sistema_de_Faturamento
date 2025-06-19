import { Routes } from '@angular/router';

// Pages
import { DashboardComponent } from '../app/pages/dashboard/dashboard.component'
import { SigninComponent } from './pages/signin/signin.component';
import { EnvoicesComponent } from './pages/envoices/envoices.component';

export const routes: Routes = [
  { path: '', component: SigninComponent }, // rota do signin
  { path: 'dashboard', component: DashboardComponent }, // rota do dashboard 
  { path: 'faturas', component: EnvoicesComponent }, // rota de faturas 
];
