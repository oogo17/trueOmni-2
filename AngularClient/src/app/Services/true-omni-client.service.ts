import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrueOmniClientService {
  baseUrl = 'https://localhost:7059/api/Company';
  companies: any;
  constructor(private http: HttpClient) { }

  getCompanies() {
    return this.http.get(this.baseUrl);
  }
}
