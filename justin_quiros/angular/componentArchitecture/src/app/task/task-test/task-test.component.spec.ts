import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTestComponent } from './task-test.component';

describe('TaskTestComponent', () => {
  let component: TaskTestComponent;
  let fixture: ComponentFixture<TaskTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
