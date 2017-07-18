import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaEpicComponent } from './nasa-epic.component';

describe('NasaEpicComponent', () => {
  let component: NasaEpicComponent;
  let fixture: ComponentFixture<NasaEpicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaEpicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaEpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
