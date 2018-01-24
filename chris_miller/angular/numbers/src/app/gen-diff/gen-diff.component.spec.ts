import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenDiffComponent } from './gen-diff.component';

describe('GenDiffComponent', () => {
  let component: GenDiffComponent;
  let fixture: ComponentFixture<GenDiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenDiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
