import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenSeq1Component } from './gen-seq1.component';

describe('GenSeq1Component', () => {
  let component: GenSeq1Component;
  let fixture: ComponentFixture<GenSeq1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenSeq1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenSeq1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
