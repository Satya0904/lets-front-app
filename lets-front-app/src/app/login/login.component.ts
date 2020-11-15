import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'claim'
  password =''
  errorMessage = 'invalidCredentails'
  invisibleMessage = false
  constructor() {
    
   }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username);
    if(this.username == 'letsuser' && this.password == 'dummy') {
      this.invisibleMessage = false
      console.log('true')
    } else {
      this.invisibleMessage = true
      console.log('false')
    }
  }
}
