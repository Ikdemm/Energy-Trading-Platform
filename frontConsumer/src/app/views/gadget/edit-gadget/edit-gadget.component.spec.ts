import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGadgetComponent } from './edit-gadget.component';

describe('EditGadgetComponent', () => {
  let component: EditGadgetComponent;
  let fixture: ComponentFixture<EditGadgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGadgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
