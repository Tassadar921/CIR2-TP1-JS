import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-histo',
  templateUrl: './histo.component.html',
  styleUrls: ['./histo.component.scss'],
})
export class HistoComponent implements OnInit {

  public myArray = [4,1,8,3,10,6,7,2,9,10,15];
  public array = [4.5,1,-8,3,10,6,7,2,9,0];
  public myTest=[40,10,80,100,6,-70,2,9];
  public tab = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
  public myFloat = [1.4, 6, 6.9, -7, 10]
  public myNeg = [-4,-5, -8, -7, -34, 0]

  constructor() { }

  ngOnInit()
  {
    console.log('Component histo chargé');
  }

  histo(array){
    if(!Array.isArray(array)) {return 'Erreur, ce n\'est pas un tableau.';}
    if(array.every(element => isNaN(element))) {return 'Erreur, le tableau ne contient pas que des nombres.';}

    let max = Math.round(Math.max(...array));
    let min = Math.round(Math.min(...array));

    let tabSize:number;
    if(min < 0) ((max-min+1) > 20) ?  (tabSize = 21) : (tabSize = max-min+1)
    else (max > 20) ? (tabSize = 21) : (tabSize = max)

    let zero = tabSize
    if(min < 0){
      (tabSize=21) ? (zero = 10) : (zero = tabSize + min)  //niveau de laxe des abscise dans le tableau
    }
    if(max <= 0) {zero = 0;}


    const histogramme = new Array(tabSize);

    for(let index = 0; index < tabSize; index++){
      histogramme[index] = new Array(array.length);
      const row = histogramme[index];
      for(let key = 0; key < array.length; key++)
      {
        const val=Math.round(array[key]);
        if(max <= 0)
          (index <= val/min*tabSize) ? (row[key]= '#') : (row[key] = '-')
        else if(val<0)
          (index >= zero && index <= zero - ((val*zero)/max))? row[key] = '#' : row[key] = '-';
        else
          (index <= zero && index >= zero - ((val*zero)/max))? row[key] = '#' : row[key] = '-';
        if(index == zero){row[key] = '~';}
      }
    }
    console.log(array);
    console.table(histogramme);
  }
}
