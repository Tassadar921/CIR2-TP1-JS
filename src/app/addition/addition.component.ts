import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss'],
})
export class AdditionComponent implements OnInit
{
  public var1 : number;
  public var2 : number;

  constructor()
  {
    this.var1=0, this.var2=0;
  }

  ngOnInit()
  {
    console.log('Component addition chargé');
  }

  add(var1:number, var2:number)
  {
    console.log('blabla');
  }
}
