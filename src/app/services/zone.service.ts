import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ZoneService {
  private apiUrl = 'http://localhost:3000/zones';

  constructor(private http: HttpClient) {}

  getZones(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addZone(name: string, points: number[][]): Observable<any> {
    return this.http.post(this.apiUrl, { name, points });
  }

  deleteZone(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
