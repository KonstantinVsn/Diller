import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';

import {Routes, RouterModule} from '@angular/router';
import { CardComponent } from './card/card.component';

const appRoutes: Routes =[
  { path: 'start', component: StartComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [StartComponent, CardComponent]
})
export class StartModule { }
