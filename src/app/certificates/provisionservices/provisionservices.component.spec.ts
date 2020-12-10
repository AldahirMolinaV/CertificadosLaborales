import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ProvisionservicesComponent} from './provisionservices.component';


describe('ProvisionservicesComponent', () => {
  let component: ProvisionservicesComponent;
  let fixture: ComponentFixture<ProvisionservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvisionservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
