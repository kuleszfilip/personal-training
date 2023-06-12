import { Injectable } from '@angular/core';
import {
  AngularFireDatabase
} from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';
import { Person } from 'src/app/model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private API_URL = '/persons';

  constructor(private db: AngularFireDatabase) { }

  getPersons(): Observable<Person[]> {
    return this.db.list<Person>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(person => this.assignKey({ person }))));
  }

  getPerson(key: string): Observable<Person> {
    return this.db.object<Person>(`${this.API_URL}/${key}`).snapshotChanges()
      .pipe(map(person => this.assignKey( {person} )));
  }

  editPerson(key: string, person: Person) {
    return this.db.object<Person>(`${this.API_URL}/${key}`).update(person);
  }
  
  private assignKey({ person }: { person: any; }): any {//wtf? w przykładzie jest tylko person
    return {...person.payload.val(), key: person.key}
  }

  addPerson(person: Person) {
    return this.db.list<Person>(this.API_URL).push(person);
  }

  removePerson(key: string) {
    return this.db.object(`${this.API_URL}/${key}`).remove();
  }

}
