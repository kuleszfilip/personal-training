import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { PersonsModule } from './persons/persons.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './core/services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
   // provideFirestore(() => getFirestore()),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PersonsModule,
    MaterialModule,
    CoreModule
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
