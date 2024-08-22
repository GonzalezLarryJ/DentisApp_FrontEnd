import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MockDeskpacientesComponent } from './components/mock-deskpacientes/mock-deskpacientes.component';
import { RegisterComponent } from './components/register/register.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { VistapacienteComponent } from './components/vistapaciente/vistapaciente.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'home', component:MockDeskpacientesComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'calendar', component:AgendaComponent},
    {path:'pacientes/:dni', component: VistapacienteComponent},
    {path:'**', redirectTo:''}, 
];
