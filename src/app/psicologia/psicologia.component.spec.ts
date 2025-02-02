/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PsicologiaComponent } from './psicologia.component';

describe('PsicologiaComponent', () => {
  let component: PsicologiaComponent;
  let fixture: ComponentFixture<PsicologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsicologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsicologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
