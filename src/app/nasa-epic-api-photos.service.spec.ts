import { TestBed, inject } from '@angular/core/testing';

import { NasaEpicApiPhotosService } from './nasa-epic-api-photos.service';

describe('NasaEpicApiPhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NasaEpicApiPhotosService]
    });
  });

  it('should be created', inject([NasaEpicApiPhotosService], (service: NasaEpicApiPhotosService) => {
    expect(service).toBeTruthy();
  }));
});
