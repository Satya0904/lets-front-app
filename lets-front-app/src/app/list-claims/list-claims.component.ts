import { Component, OnInit } from '@angular/core';


export class Claim {
  constructor(public id:number, 
    public description:string, 
    public department: string){

  }
}

@Component({
  selector: 'app-list-claims',
  templateUrl: './list-claims.component.html',
  styleUrls: ['./list-claims.component.css']
})

export class ListClaimsComponent implements OnInit {

  claims = [
    new Claim(1, 'travel expense claim', 'Travel'),
    new Claim(2, 'medical claim', 'MediBuddy'),
    new Claim(3, 'Hotel expense claim', 'Hosptitality')
  ]
  constructor() { }

  ngOnInit() {
  }

}
