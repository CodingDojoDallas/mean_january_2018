import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyanTwoComponent } from './saiyan-two.component';

describe('SaiyanTwoComponent', () => {
  let component: SaiyanTwoComponent;
  let fixture: ComponentFixture<SaiyanTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaiyanTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiyanTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
