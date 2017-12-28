import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MzButtonModule, MzCardModule, MzTabModule} from 'ng2-materialize';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MzButtonModule,
    MzCardModule,
    MzTabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
