import { Component, Input, OnInit } from '@angular/core';
import { DiseaseService } from './services/disease.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent  {

  public diseaseData: Array<any>;
  public currentDisease: any;

  constructor(private diseaseService: DiseaseService) {
    diseaseService.getDiseases().subscribe(
      res => {
        this.diseaseData = res;
      console.log(res);
      },
      err => console.log('Error retrieving diseases')
    );
  }
}
