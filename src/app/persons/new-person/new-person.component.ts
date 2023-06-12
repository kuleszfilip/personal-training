import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PersonFormComponent } from '../person-form/person-form.component';
import { PersonsService } from 'src/app/core/services/persons.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.scss']
})
export class NewPersonComponent {
  @ViewChild('personForm')
  personForm!: PersonFormComponent;
  
  constructor(
    private dialogRef: MatDialogRef<NewPersonComponent>,
    private toast: MatSnackBar,
    private personService: PersonsService,
    ) {}

  createPerson() {
    console.log(this.personForm);
    this.personService.addPerson(this.personForm.form.value)
      .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this))
  }

  private onCreatingSuccess() {
    this.dialogRef.close();
    this.toast.open('Person successfully created!', '', {panelClass: 'toast-success'});
  }

  private onCreatingFailure() {
    this.toast.open('dupa', '', {panelClass: 'toast-error'});
  }


}
