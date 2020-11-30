import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MaterialModule } from './../material/material.module';

import { TestComponent400Component } from './test-component400.component';

describe('TestComponent400Component', () => {
  let component: TestComponent400Component;
  let fixture: ComponentFixture<TestComponent400Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ TestComponent400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
