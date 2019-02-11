import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R102Page } from './r102.page';

describe('R102Page', () => {
  let component: R102Page;
  let fixture: ComponentFixture<R102Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R102Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R102Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
