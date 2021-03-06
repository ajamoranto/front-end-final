import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './routing/routing.module';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import 'hammer-timejs';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { FoodService } from './food.service';
import { SessionService } from './session.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [FoodService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
