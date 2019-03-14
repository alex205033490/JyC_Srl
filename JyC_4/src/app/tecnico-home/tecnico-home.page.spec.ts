import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoHomePage } from './tecnico-home.page';

describe('TecnicoHomePage', () => {
  let component: TecnicoHomePage;
  let fixture: ComponentFixture<TecnicoHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
