import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { PatientRequest } from '../models/patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  public patient = new PatientRequest();

  constructor(private patientService: PatientService) {
    patientService.getPatientById().subscribe(
      res => {
        this.patient = res;
        console.log(res);
      },
      err => console.log('Error retrieving diseases')
    );
  }

  ngOnInit() {
  }

}
