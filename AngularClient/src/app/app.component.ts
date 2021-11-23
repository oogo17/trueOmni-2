import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularClient';
  companies: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCompanies();
    
  }

  getCompanies() {
    this.http.get('https://localhost:7059/api/Company').subscribe(response => {
      this.companies = response;
    }, error => {
      console.log(console.error);
    })
  }
}

