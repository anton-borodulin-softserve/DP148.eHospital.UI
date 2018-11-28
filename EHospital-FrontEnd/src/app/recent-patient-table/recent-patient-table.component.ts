import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-recent-patient-table',
  templateUrl: './recent-patient-table.component.html',
  styleUrls: ['./recent-patient-table.component.css']
})
export class RecentPatientTableComponent {

  public patientData: Array<any>;
  public currentPatient: any;

  constructor(private patientService: PatientService) {
    patientService.getRecent().subscribe((data: any) => this.patientData = data);    
  }


}
