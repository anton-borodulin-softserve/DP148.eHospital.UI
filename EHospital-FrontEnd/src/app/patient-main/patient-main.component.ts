import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-main',
  templateUrl: './patient-main.component.html',
  styleUrls: ['./patient-main.component.css']
})
export class PatientMainComponent {
  public patientData: Array<any>;
  

  //constructor() { }

  //ngOnInit() {
  //}


  constructor(private patientService: PatientService) {
    patientService.getPatients().subscribe((data: any) => this.patientData = data);
    //this.currentGenre = this.setInitialValuesForGenreData(); 
  }
}
