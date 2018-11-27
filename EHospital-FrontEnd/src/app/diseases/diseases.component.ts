import { Component, OnInit } from '@angular/core';
import { DiseaseService } from '../disease.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent implements OnInit {

  diseases = {}

  constructor(private api: DiseaseService) { }

  ngOnInit() {
    this.api.getDiseases().subscribe(res => {
      console.log(res);
    });
  }

}
