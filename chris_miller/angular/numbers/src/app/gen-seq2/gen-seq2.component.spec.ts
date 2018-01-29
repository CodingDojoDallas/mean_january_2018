import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenSeq2Component } from './gen-seq2.component';

describe('GenSeq2Component', () => {
  let component: GenSeq2Component;
  let fixture: ComponentFixture<GenSeq2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenSeq2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenSeq2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
