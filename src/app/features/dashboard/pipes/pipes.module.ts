import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    PipesComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule
  ],
  exports:[
    PipesComponent
  ]
})
export class PipesModule { }
