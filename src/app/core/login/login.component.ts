import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Credentials } from './credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credentials: Credentials = {
    email: '',
    password: '',
  }
   
  constructor(
    private authService: AuthService,
    private toast: MatSnackBar,
    private router: Router
  ) {}

     login() {
      this.authService.SignIn(this.credentials);   
    }

    register() {
      this.authService.register(this.credentials)
        .then(user => this.toast.open('Account created, please log in!', '', {panelClass: 'green-snackbar'} ))
        .catch(error => this.toast.open(error.message, '', {panelClass: 'red-snackbar'}))
    }

}
