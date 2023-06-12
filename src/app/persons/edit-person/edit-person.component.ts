import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonsService } from 'src/app/core/services/persons.service';
import { PersonFormComponent } from '../person-form/person-form.component';
import { Person } from 'src/app/model/person';
import { tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  @ViewChild('personForm')
  personForm!: PersonFormComponent;

  person!: Person;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonsService,
    private toast: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadPerson();
  }

  removePerson() {
    this.personService.removePerson(this.person.key as string)
      .then(this.onRemoveSuccess.bind(this), this.onFailure.bind(this));
  }

  private onRemoveSuccess() {
    this.router.navigate(['/dashboard/persons'])
    this.toast.open('Person successfully removed', '', {panelClass: 'green-snackbar'});
  }

  private onFailure(error: any) {
    this.toast.open(error.message, '', {panelClass: 'red-snackbar'});
  }
  
  editPerson() {
    this.personService.editPerson(this.person.key as string, this.personForm.form.value)
      .then(this.onEditSuccess.bind(this), this.onEditFailure.bind(this))
  }

  private onEditSuccess() {
    this.router.navigate(['/dashboard/persons'])
    this.toast.open('Person successfully edited', '', {
      panelClass: ['green-snackbar'],
      });
  }

  private onEditFailure(error: any) {
    this.toast.open(error.message, '', {panelClass: 'red-snackbar'});
  }

  private loadPerson() {
    const key = this.route.snapshot.params['key'];
    this.personService.getPerson(key)
        .subscribe(person => {
          this.personForm.setPerson(person);
          this.person = person;
        } )
  }
  
}
