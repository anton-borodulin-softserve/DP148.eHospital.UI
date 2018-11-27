import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { DiseaseComponent } from './disease/disease.component';
import { DiseasesComponent } from './diseases/diseases.component';

import { DiseaseService } from './disease.service';

@NgModule({
  declarations: [
    AppComponent,
    DiseaseComponent,
    DiseasesComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [DiseaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
