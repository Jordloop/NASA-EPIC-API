import { epicKey } from './api-keys';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MarsRoverApiPhotos {
  constructor(private http: Http) { }

  getByDateAndCamera(date: string, camera: string) {
    return this.http.get("https://api.nasa.gov/EPIC/api/natural/date/"+date+"?api_key="+epicKey)
  }
}
