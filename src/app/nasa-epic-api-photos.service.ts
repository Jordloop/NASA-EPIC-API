import { epicKey } from './api-keys';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NasaEpicApiPhotosService {
  constructor(private http: Http) { }

  getByDate(date: string) {
    return this.http.get("https://api.nasa.gov/EPIC/api/natural/date/"+date+"?api_key="+epicKey)
  }
}
