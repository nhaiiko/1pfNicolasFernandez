import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';



@NgModule({
  declarations: [
    ReversePipe,
    ResaltadoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReversePipe,
    ResaltadoDirective
  ],
})
export class SharedModule { }
