import { Component, OnInit } from '@angular/core';
import { EmployeelistService } from './../employeelist.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public data=[];


  constructor(private _service:EmployeelistService,private route:Router) { }

  ngOnInit(): void {
    this.data=this._service.getEmployees();
  }

  out(){
    this.route.navigateByUrl('');

  }

}
