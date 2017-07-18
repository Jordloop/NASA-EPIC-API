import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NasaEpicComponent } from './nasa-epic/nasa-epic.component';
import { PhotosListComponent } from './photos-list/photos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpModule,
    NasaEpicComponent,
    PhotosListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
