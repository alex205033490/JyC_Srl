import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercialHomePage } from './comercial-home.page';

describe('ComercialHomePage', () => {
  let component: ComercialHomePage;
  let fixture: ComponentFixture<ComercialHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComercialHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercialHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
