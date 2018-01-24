import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeingComponent } from './being.component';

describe('BeingComponent', () => {
  let component: BeingComponent;
  let fixture: ComponentFixture<BeingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
