import { Component, Input, OnInit } from '@angular/core';
import { DiseaseService } from '../disease.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent  {

  public diseaseData: Array<any>;
  public currentDisease: any;

  displayedColumns: string[] = ['id', 'name'];
  dataSource = this.diseaseData;

  constructor(private diseaseService: DiseaseService) {
    diseaseService.getDiseases().subscribe((data: any) => this.diseaseData = data);
    //this.currentGenre = this.setInitialValuesForGenreData(); 
  }
}
