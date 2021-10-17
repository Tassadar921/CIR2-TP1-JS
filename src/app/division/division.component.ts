import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss'],
})
export class DivisionComponent implements OnInit
{
  public var1 : number;
  public var2 : number;

  constructor()
  {
    this.var1=0, this.var2=0;
  }

  ngOnInit()
  {
    console.log('Component division chargé');
  }

  div(var1:number, var2:number)
  {
    //gérer le cas de la div par 0
    console.log('blabla');
  }
}
