import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MaterialModule } from './../material/material.module';

import { TestComponent71Component } from './test-component71.component';

describe('TestComponent71Component', () => {
  let component: TestComponent71Component;
  let fixture: ComponentFixture<TestComponent71Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
  imports: [ MaterialModule ],
      declarations: [ TestComponent71Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
