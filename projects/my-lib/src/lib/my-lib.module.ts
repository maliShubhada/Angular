import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyLibComponent,
  
  ],
  imports: [
    FormsModule
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
