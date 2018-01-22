import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamaComponent } from './gama.component';

describe('GamaComponent', () => {
  let component: GamaComponent;
  let fixture: ComponentFixture<GamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
