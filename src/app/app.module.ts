// モジュール
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

// Swiper
import { SwiperModule } from 'swiper/angular';

// component
import { RandomComponent } from 'src/app/component/random/random.component';
import { SwiperComponent } from 'src/app/component/parts/swiper/swiper.component';
import { PickButtonComponent } from 'src/app/component/parts/button/pick/pick-button/pick-button.component';

const ROUTE_TABLE: Routes = [
  { path: 'random', component: RandomComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RandomComponent,
    SwiperComponent,
    PickButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatChipsModule,
    RouterModule.forRoot(ROUTE_TABLE),
    HttpClientModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
