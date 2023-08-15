import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvEditComponent } from './nv-edit.component';

describe('NvEditComponent', () => {
  let component: NvEditComponent;
  let fixture: ComponentFixture<NvEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
