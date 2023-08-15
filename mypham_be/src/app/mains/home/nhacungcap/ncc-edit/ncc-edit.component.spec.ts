import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NccEditComponent } from './ncc-edit.component';

describe('NccEditComponent', () => {
  let component: NccEditComponent;
  let fixture: ComponentFixture<NccEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NccEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NccEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
