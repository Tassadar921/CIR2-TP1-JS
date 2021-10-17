import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit
{
  public var1 : number;

  constructor()
  {
    this.var1=0;
  }

  ngOnInit()
  {
    console.log('Component square chargé');
  }

  square(var1:number)
  {
    console.log('blabla');
  }
}
