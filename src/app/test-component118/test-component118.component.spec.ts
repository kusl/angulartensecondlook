import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from './../material/material.module';

import { TestComponent118Component } from './test-component118.component';

describe('TestComponent118Component', () => {
  let component: TestComponent118Component;
  let fixture: ComponentFixture<TestComponent118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
  imports: [ MaterialModule ],
      declarations: [ TestComponent118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
