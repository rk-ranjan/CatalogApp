import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { CourseComponent } from './components/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePageComponent,
    TopHeaderComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
