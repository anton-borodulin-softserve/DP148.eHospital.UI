import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patient/patients/patients.component';
import { PatientsRecentComponent } from './patient/patients-recent/patients-recent.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';

import { PatientService } from './patient/services/patient.service';
import { LeftMenuComponent } from './shared/left-menu/left-menu.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { RightBarComponent } from './shared/right-bar/right-bar.component';
import { PatientMainComponent } from './patient/patient-main/patient-main.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'patient', component: PatientMainComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientsRecentComponent,
    PatientDetailsComponent,
    LeftMenuComponent,
    TopBarComponent,
    RightBarComponent,
    PatientMainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
