import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterComponent } from './components/master/master.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
