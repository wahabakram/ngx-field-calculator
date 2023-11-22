import { NgModule } from '@angular/core';
import { NgxFieldCalculatorComponent } from './ngx-field-calculator.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgxFieldCalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgxFieldCalculatorComponent
  ]
})
export class NgxFieldCalculatorModule { }
