import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { LoginComponent } from './core/login/login.component';
import { PersonsComponent } from './persons/persons.component';
import { EditPersonComponent } from './persons/edit-person/edit-person.component';
import { AuthGuard } from './core/services/auth.guard';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard], 
    children: [
      { path: '', redirectTo: '/persons', pathMatch: 'full'},
      { path: 'persons', loadChildren:  () => import('./persons/persons.module').then( mod => mod.PersonsModule)}
    ]  
  },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
