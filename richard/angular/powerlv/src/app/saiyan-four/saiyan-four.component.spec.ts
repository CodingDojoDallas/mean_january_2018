import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyanFourComponent } from './saiyan-four.component';

describe('SaiyanFourComponent', () => {
  let component: SaiyanFourComponent;
  let fixture: ComponentFixture<SaiyanFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaiyanFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiyanFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
