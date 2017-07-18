import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.router';

import { AppComponent } from './app.component';
import { NasaEpicComponent } from './nasa-epic/nasa-epic.component';
import { PhotosListComponent } from './photos-list/photos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NasaEpicComponent,
    PhotosListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
