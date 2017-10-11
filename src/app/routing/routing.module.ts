import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from '../home/home.component';
import { DisplayComponent }   from '../display/display.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'display',  component: DisplayComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
