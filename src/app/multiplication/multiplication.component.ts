import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss'],
})
export class MultiplicationComponent implements OnInit
{
  public var1 : number;
  public var2 : number;

  constructor()
  {
    this.var1=0, this.var2=0;
  }

  ngOnInit()
  {
    console.log('Component multiplication chargé');
  }

  mul = (var1:number, var2:number) => {console.log(var1*var2);}

}
