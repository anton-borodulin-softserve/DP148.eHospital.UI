import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {DiseaseRequest} from '../models/desease';
import {map} from 'rxjs/operators';

@Injectable()
export class DiseaseService {

  private readonly headers: HttpHeaders;
  private accessPointUrl = 'http://localhost:2922/api/disease';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public getDiseases(): Observable<DiseaseRequest[]> {
    // Get all diseases data.
    return this.http.get<DiseaseRequest[]>(this.accessPointUrl, { headers: this.headers }).pipe(map(response => {
      return response;
    }));
  }
}
