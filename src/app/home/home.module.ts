import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import {AdditionComponent} from '../addition/addition.component';
import {SoustractionComponent} from '../soustraction/soustraction.component';
import {MultiplicationComponent} from '../multiplication/multiplication.component';
import {DivisionComponent} from '../division/division.component';
import {SquareComponent} from '../square/square.component';
import {ArrayComponent} from '../array/array.component';
import {FactsComponent} from '../facts/facts.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations:
    [
      HomePage,
      AdditionComponent,
      SoustractionComponent,
      MultiplicationComponent,
      DivisionComponent,
      SquareComponent,
      ArrayComponent,
      FactsComponent
    ]
})
export class HomePageModule {}
