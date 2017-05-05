/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuickshopComponent } from './quickshop.component';

describe('QuickshopComponent', () => {
  let component: QuickshopComponent;
  let fixture: ComponentFixture<QuickshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
