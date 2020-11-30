import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MaterialModule } from './../material/material.module';

import { TestComponent51Component } from './test-component51.component';

describe('TestComponent51Component', () => {
  let component: TestComponent51Component;
  let fixture: ComponentFixture<TestComponent51Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
  imports: [ MaterialModule ],
      declarations: [ TestComponent51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
