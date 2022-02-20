import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoDataComponent } from '../../component/no-data/no-data.component';

@NgModule({
  exports: [
    NoDataComponent
  ],
  declarations: [
    NoDataComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NoDataModule { }
