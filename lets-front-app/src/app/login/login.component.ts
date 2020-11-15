import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Sachee'
  password =''
  errorMessage = 'invalidCredentials'
  invalidUser = false


  constructor(private route:Router) {}

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username);
    if(this.username == 'Sachee' && this.password == 'dummy') {
      this.invalidUser = false
      this.route.navigate(['welcome', this.username])
      console.log('true')
    } else {
      this.invalidUser = true
      console.log('false')
    }
  }
}
