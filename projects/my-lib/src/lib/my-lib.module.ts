import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { FormsModule } from '@angular/forms';
// import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [
    MyLibComponent,
    // CounterComponent,
  
  ],
  imports: [
    FormsModule
  ],
  exports: [
    MyLibComponent,
    // CounterComponent
  ]
})
export class MyLibModule { }
