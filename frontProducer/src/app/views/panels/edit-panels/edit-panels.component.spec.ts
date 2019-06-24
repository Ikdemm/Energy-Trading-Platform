import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPanelsComponent } from './edit-panels.component';

describe('EditPanelsComponent', () => {
  let component: EditPanelsComponent;
  let fixture: ComponentFixture<EditPanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
