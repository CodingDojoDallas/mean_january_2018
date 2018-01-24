import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerLevelComponent } from './power-level.component';

describe('PowerLevelComponent', () => {
  let component: PowerLevelComponent;
  let fixture: ComponentFixture<PowerLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
