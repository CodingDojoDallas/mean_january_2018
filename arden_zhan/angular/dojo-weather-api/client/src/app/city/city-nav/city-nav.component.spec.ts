import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityNavComponent } from './city-nav.component';

describe('CityNavComponent', () => {
  let component: CityNavComponent;
  let fixture: ComponentFixture<CityNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
