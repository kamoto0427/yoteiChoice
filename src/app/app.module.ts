// モジュール
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
// component
import { RandomComponent } from './random/random.component';

const ROUTE_TABLE: Routes = [
  { path: 'random', component: RandomComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RandomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    RouterModule.forRoot(ROUTE_TABLE),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
