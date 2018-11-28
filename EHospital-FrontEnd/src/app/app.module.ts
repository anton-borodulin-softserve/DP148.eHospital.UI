import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { DiseaseComponent } from './disease/disease.component';
import { DiseasesComponent } from './diseases/diseases.component';

import { DiseaseService } from './disease.service';
import { PatientService } from './patient.service';

import { LeftMenuComponent } from './SHARED/left-menu/left-menu.component';
import { TopBarComponent } from './SHARED/top-bar/top-bar.component';
import { LogoutBarComponent } from './SHARED/logout-bar/logout-bar.component';
import { PatientMainComponent } from './patient-main/patient-main.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientTableComponent } from './patient-table/patient-table.component';
import { RecentPatientTableComponent } from './recent-patient-table/recent-patient-table.component';

//const appRoutes: Routes = [
//  //{ path: 'pat', component: PatientMainComponent }
//  // TO DO: insert other paths if needed
//];

@NgModule({
  declarations: [
    AppComponent,
    DiseaseComponent,
    DiseasesComponent,
    LeftMenuComponent,
    TopBarComponent,
    LogoutBarComponent,
    PatientDetailsComponent,
    PatientMainComponent,
    PatientTableComponent,
    RecentPatientTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [DiseaseService, PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
