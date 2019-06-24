import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGadgetComponent } from './add-gadget.component';

describe('AddGadgetComponent', () => {
  let component: AddGadgetComponent;
  let fixture: ComponentFixture<AddGadgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGadgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
