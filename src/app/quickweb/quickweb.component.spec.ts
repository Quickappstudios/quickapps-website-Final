/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuickwebComponent } from './quickweb.component';

describe('QuickwebComponent', () => {
  let component: QuickwebComponent;
  let fixture: ComponentFixture<QuickwebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickwebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
