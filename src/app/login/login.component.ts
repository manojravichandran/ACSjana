import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(public router:Router,private authservice :AuthService) { 
  
  }

  ngOnInit(): void {

  }


onClickSubmit(data)
{

  if((data.email=="admin") && (data.passwd=="password"))
  {
   
    this.authservice.onlogIn();
    this.router.navigateByUrl('/home');
  }
  

}
}
