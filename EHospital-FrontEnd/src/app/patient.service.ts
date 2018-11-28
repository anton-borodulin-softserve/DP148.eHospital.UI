import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PatientService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:5000/api/patient';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    
  }

  public getPatients() {
    // Get all patient data
    return this.http.get(this.accessPointUrl, { headers: this.headers });
  }

  public getRecent() {
    // Get recent patient data
    return this.http.get(this.accessPointUrl + '/recent', { headers: this.headers });
  }
}
