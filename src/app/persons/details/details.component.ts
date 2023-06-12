import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
 person!: Person;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Person
  ) {
    this.person = data;
  }

  close() {
    this.dialogRef.close();
  }

  goToEditPerson() {
    this.dialogRef.close();
    this.router.navigate(['/dashboard/persons', this.person.key])
  }

}
