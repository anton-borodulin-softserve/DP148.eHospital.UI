import { Component, OnInit, Input, Output } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { PatientViewRequest } from '../models/patientView';
import { PatientRequest } from '../models/patient';

@Component({
  selector: 'app-patient-main',
  templateUrl: './patient-main.component.html',
  styleUrls: ['./patient-main.component.css']
})
export class PatientMainComponent implements OnInit {

  public patientsData: Array<PatientViewRequest>;
  public currentPatient: PatientViewRequest;
  public currentPatientDetails = new PatientRequest();  
    
  constructor(private patientService: PatientService) {    
    this.patientService.getPatients().subscribe(
      res => {
        this.patientsData = res;
        console.log(res);
      },
      err => console.log('Error retrieving diseases')
    );
    this.currentPatient = new PatientViewRequest(undefined, '','');
  }

  ngOnInit() {
  }
  
  public editClicked = function (record) {
    this.currentPatient = record;
    this.patientService.getPatientById(record).subscribe(
      res => {
        this.currentPatientDetails = res;
        console.log(res);
      },
      err => console.log('Error retrieving patient')
    );
  }

}
