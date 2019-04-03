import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Payment.DoneComponent } from './payment.done.component';

describe('Payment.DoneComponent', () => {
  let component: Payment.DoneComponent;
  let fixture: ComponentFixture<Payment.DoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Payment.DoneComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Payment.DoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
