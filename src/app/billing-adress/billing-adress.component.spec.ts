import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAdressComponent } from './billing-adress.component';

describe('BillingAdressComponent', () => {
  let component: BillingAdressComponent;
  let fixture: ComponentFixture<BillingAdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingAdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
