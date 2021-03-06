import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MaterialModule } from './../material/material.module';

import { TestComponent261Component } from './test-component261.component';

describe('TestComponent261Component', () => {
  let component: TestComponent261Component;
  let fixture: ComponentFixture<TestComponent261Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
  imports: [ MaterialModule ],
      declarations: [ TestComponent261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
