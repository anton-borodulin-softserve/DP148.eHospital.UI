import { Component, Input, OnInit } from '@angular/core';
//import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {

  @Input() patientData: Array<any>;
  
  constructor() { }

  ngOnInit() {
  }
 
  //constructor(private patientService: PatientService) {
  //  patientService.getPatients().subscribe((data: any) => this.patientData = data);
  //  //this.currentGenre = this.setInitialValuesForGenreData(); 
  //}

}
