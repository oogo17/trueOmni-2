import { Component, OnInit } from '@angular/core';
import { TrueOmniClientService } from 'src/app/Services/true-omni-client.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  organizations: any ={};

  constructor(private trueOmniService: TrueOmniClientService) { }


  ngOnInit(): void {
     this.organizations = this.trueOmniService.getCompanies().subscribe(response => {
      this.organizations = response;
    }, error => {
      console.log(console.error);
    });
  }

}
