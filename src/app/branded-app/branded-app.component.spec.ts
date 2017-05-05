/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BrandedAppComponent } from './branded-app.component';

describe('BrandedAppComponent', () => {
  let component: BrandedAppComponent;
  let fixture: ComponentFixture<BrandedAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandedAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandedAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
