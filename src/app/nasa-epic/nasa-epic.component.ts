import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NasaEpicApiPhotosService } from '../nasa-epic-api-photos.service';


@Component({
  selector: 'app-nasa-epic',
  templateUrl: './nasa-epic.component.html',
  styleUrls: ['./nasa-epic.component.css'],
  providers: [ NasaEpicApiPhotosService ]
})
export class RoverFormComponent {
  photos: any[]=null;
  noPhotos: boolean=false;
  constructor(private NasaEpicPhotos: NasaEpicApiPhotosService) { }
  getEpicImages(date: string) {
    this.noPhotos=false;
    this.NasaEpicPhotos.getByDate(date).subscribe(response => {
      if(response.json().length > 0)
      {
        this.photos = response.json();
      }
      else {
        this.noPhoto = true;
      }
      console.log(this.photos);
      });
    }
  }
