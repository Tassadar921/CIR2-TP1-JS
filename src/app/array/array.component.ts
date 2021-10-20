import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
})
export class ArrayComponent implements OnInit
{
  public myArray;
  public impairs;
  public sinArray;
  public lnArray;
  public nbrLn;

  constructor()
  {
    this.myArray = [157,-10,81,1000,4,1024,16,492,9,287,0];
    this.nbrLn = 0;
  }

  ngOnInit()
  {
    console.log('Component array chargé');
  }

  array()
  {
    console.log('myArray : ' + this.myArray);

    this.impairs = this.myArray.filter(value => 1 == value%2); //pairs contient les nombres pairs de myArray
    console.log('Impairs : ' + this.impairs);

    this.sinArray = this.myArray.map(value => Math.sin(value)); //sinArray contient les sinus des nombres de myArray
    console.log('sinArray : ' + this.sinArray);

    this.lnArray = this.myArray.map(value => Math.log10(value)); //on les met tous en log de base 10
    for(let i=0; i<this.myArray.length;i++)
    {
      if(this.lnArray[i]==i){this.nbrLn++;} //on check pour toutes les valeurs et on incrémente quand ça match
    }
    console.log('On a ' + this.nbrLn + ' valeurs dont le log de base 10 correspond à leurs indices dans le tableau');

  }
}
