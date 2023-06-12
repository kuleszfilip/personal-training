import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../core/services/persons.service';
import { Observable } from 'rxjs';
import { Person } from '../model/person';
import { MatDialog } from '@angular/material/dialog';
import { NewPersonComponent } from './new-person/new-person.component';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {
  persons$: Observable<Person[]> = this.personsService.getPersons();

  constructor(
    private personsService: PersonsService,
    private dialog: MatDialog) {
  }

  openNewPersonModal() {
    this.dialog.open(NewPersonComponent);
  }

  showDetails(person : Person) {
    this.dialog.open(DetailsComponent, { data: person });
  }

}
