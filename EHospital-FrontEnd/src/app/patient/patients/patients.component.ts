import { Component, Input, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { PatientViewRequest } from '../models/patientView';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {

  public patientsData: Array<PatientViewRequest>;
  public patientView: PatientViewRequest;

  constructor(private patientService: PatientService) {
    patientService.getPatients().subscribe(
      res => {
        this.patientsData = res;
        console.log(res);
      },
      err => console.log('Error retrieving diseases')
    );
  }

  

}
