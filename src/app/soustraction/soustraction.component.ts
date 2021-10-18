import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soustraction',
  templateUrl: './soustraction.component.html',
  styleUrls: ['./soustraction.component.scss'],
})
export class SoustractionComponent implements OnInit
{
  public var1 : number;
  public var2 : number;

  constructor()
  {
    this.var1=0, this.var2=0;
  }

  ngOnInit()
  {
    console.log('Component soustraction chargé');
  }

  minus = (var1:number, var2:number) => {console.log(var1-var2);}

}
