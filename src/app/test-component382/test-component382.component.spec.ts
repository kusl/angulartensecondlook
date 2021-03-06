import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MaterialModule } from './../material/material.module';

import { TestComponent382Component } from './test-component382.component';

describe('TestComponent382Component', () => {
  let component: TestComponent382Component;
  let fixture: ComponentFixture<TestComponent382Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
  imports: [ MaterialModule ],
      declarations: [ TestComponent382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
