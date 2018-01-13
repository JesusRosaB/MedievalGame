/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TownhallComponent } from './townhall.component';

describe('TownhallComponent', () => {
  let component: TownhallComponent;
  let fixture: ComponentFixture<TownhallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TownhallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TownhallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
