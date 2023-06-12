import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserInfo } from "firebase/auth";
import { Credentials } from '../login/credentials';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userData!: UserInfo;

  constructor(
    private afAuth: AngularFireAuth,
    public router: Router,

  ) { }


  SignIn(credentials: Credentials) {
    return this.afAuth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((result) => {
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.userData = user;
            this.router.navigate(['/dashboard/persons']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  register(credentials: Credentials) {
    return this.afAuth
      .createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  isLoggedIn() {
    return !!this.userData;
  }

  get user() {
    return this.userData;
  }

  logout() {
    return this.afAuth.signOut();
   }
  
}
