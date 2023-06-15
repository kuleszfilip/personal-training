import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './persons.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { MaterialModule } from '../material/material.module';
import { NewPersonComponent } from './new-person/new-person.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { PersonsRoutingModule } from './persons-routing.module';

@NgModule({
  declarations: [
    PersonsComponent,
    PersonCardComponent,
    NewPersonComponent,
    PersonFormComponent,
    DetailsComponent,
    EditPersonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PersonsRoutingModule
  ],
  exports: [
    PersonsComponent
  ]
})
export class PersonsModule { }
