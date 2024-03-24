import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import {RouterModule, RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    CounterComponent
  ],
    imports: [
        CommonModule,
        CounterRoutingModule,
        RouterModule,
        RouterOutlet
    ]
})
export class CounterModule { }
