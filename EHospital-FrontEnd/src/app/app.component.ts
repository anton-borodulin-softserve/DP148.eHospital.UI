import { Component } from '@angular/core';
import { DiseaseComponent } from './disease/disease.component';
import { PatientMainComponent } from './patient-main/patient-main.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eHospital-Diseases';
}
