import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Person, Visit } from 'src/app/model/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent {
  @Input() editMode = false;


  visitTypes = [
    { label: 'Rehabilitacja', value: 'Rehabilitacja'},
    { label: 'prywatna', value: 'prywatna'},
    { label: 'szpital', value: 'szpital'}
  ]
  
  new_Date: Date = new Date();
  currentDate: string = '';
  pipe = new DatePipe('en-US');

  changeFormat(new_Date : Date): string {
    const changedFormat = this.pipe.transform(this.new_Date, 'dd/MM/YYYY');
    return this.currentDate = changedFormat as string;  
  }

  form: FormGroup = this.formBuilder.group( {
    name: ['', { validators: [Validators.required, Validators.maxLength(30)] }],
    forname: ['', { validators: [Validators.required] }],
    address: [''] ,
    city: ['', { validators: [Validators.required] }],
    email: ['', { validators: [Validators.email] }],
    phone: ['', { validators: [Validators.required] }],
    
    registrationTime: this.changeFormat(this.new_Date),
    regularPatient: false,
    visits: this.formBuilder.array([])
  })

  constructor(
    private formBuilder: FormBuilder,
    private dateAdapter: DateAdapter<Date>) {
      this.dateAdapter.setLocale('en-GB');
  }

  setPerson(person: Person) {
    const {key, ...formData} = person;
    this.form.patchValue(formData);
    console.log(formData);
    if(!formData.visits) {
      return;
    }
    formData.visits.forEach(visit => this.addVisitToForm(visit));
  }

  get f() {
    return this.form.controls;
  }

  addVisitToForm(visit: Visit = {} as Visit) {
    const visitForm: FormGroup = this.formBuilder.group({
     type: visit.type || '',
     date: visit.date || '',
     treatment: visit.treatment || '',
     nextVisit: visit.nextVisit || ''
   });
   this.visits.push(visitForm);
 }

  buildVisit() {
     const visitForm: FormGroup = this.formBuilder.group({
      type: '',
      date: '',
      treatment: '',
      nextVisit: ''
    });

    this.visits.push(visitForm);
  }

  get visits() {
    return this.form.controls['visits'] as FormArray;
  }

  removeVisit(index: number) {
    this.visits.removeAt(index);

  }

  // private buildForm() {
  //   this.form = this.formBuilder.group( {
  //     name: ['', { validators: [Validators.required, Validators.maxLength(5)] }],
  //     forname: ['', { validators: [Validators.required] }],
  //     address: [''] ,
  //     city: ['', { validators: [Validators.required] }],
  //     email: ['', { validators: [Validators.email] }],
  //     phone: ['', { validators: [Validators.required] }],
  //     regularPatient: false,
  //     visit: this.formBuilder.array([this.buildVisit()])
  //   })
  // }
}
