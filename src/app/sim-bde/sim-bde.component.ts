import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sim-bde',
  templateUrl: './sim-bde.component.html',
  styleUrls: ['./sim-bde.component.scss'],
})
export class SimBDEComponent implements OnInit
{

  constructor() { }

  ngOnInit() {}

  sim=(p, plus, moins, chanceSoif, nbSoiree)=>
  {
    let pSoifs=0;
    for(let i=0;i<nbSoiree;i++)
    {
      const pSoiree=p+(Math.random() * (plus - moins) + moins);
      pSoifs+=pSoiree*chanceSoif;
    }
    console.log("Après " + nbSoiree + " simulations, le BDE aura besoin de " + Math.round(pSoifs/nbSoiree) + " Royal\'ISEN en moyenne");
  };
}
