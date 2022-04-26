import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyFootComponent } from './my-foot/my-foot.component';
import { HomeComponent } from './home/home.component';
import { AlumniComponent } from './alumni/alumni.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyFootComponent,
    HomeComponent,
    AlumniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
