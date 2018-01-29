import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyanThreeComponent } from './saiyan-three.component';

describe('SaiyanThreeComponent', () => {
  let component: SaiyanThreeComponent;
  let fixture: ComponentFixture<SaiyanThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaiyanThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiyanThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
