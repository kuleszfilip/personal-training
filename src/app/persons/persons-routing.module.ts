import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons.component';
import { EditPersonComponent } from './edit-person/edit-person.component';

const routes: Routes = [
      { path: '', component: PersonsComponent},
      { path: ':key', component: EditPersonComponent},
    ];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
