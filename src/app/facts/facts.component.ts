import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss'],
})
export class FactsComponent implements OnInit
{
  public phrase = 'Vérité sur Chuck Norris : Hulk s\'est battu contre Chuck Norris une fois. Depuis, il fait de la pub pour du maïs';
  public words;

  constructor()
  {
  }

  ngOnInit()
  {
    console.log('Component facts chargé');
  }

  repertory(phrase:string)
  {
    let temp = new Map;
    for(let i = 0; i < phrase.length; i++)
    {
      if(!temp.has(phrase[i]))
      {
        temp.set(phrase[i],1);
      }
      else
      {
        temp.set(phrase[i],temp.get(phrase[i])+1);
      }
    }
    console.log(temp);
    return temp;
  }

  facts()
  {
    console.log(this.phrase.replace('Chuck Norris', 'King Kong'));
    this.words = this.phrase.split(' ');
    let count=0;
    for(let i = 0; i<this.words.length; i++)
    {
      count+=this.words[i].length;
    }
    console.log('Moyenne taille des mots : ' + count/this.words.length);
    const temp = this.repertory(this.phrase);
    const tri = new Map([...temp].sort());
    console.log(tri)
  }
}
