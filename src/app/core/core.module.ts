import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImageMapComponent } from './image-map/image-map.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent,
    ImageMapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
    LoginComponent
  ],
  providers: [AuthService],
})
export class CoreModule { }
