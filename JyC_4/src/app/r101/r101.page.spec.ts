import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R101Page } from './r101.page';

describe('R101Page', () => {
  let component: R101Page;
  let fixture: ComponentFixture<R101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R101Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
