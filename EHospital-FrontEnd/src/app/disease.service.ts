import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//@Injectable({
//  providedIn: 'root'
//})
@Injectable()
export class DiseaseService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:5000/api/disease';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public getDiseases() {
    // Get all genre data
    return this.http.get(this.accessPointUrl, { headers: this.headers });
  }
}
