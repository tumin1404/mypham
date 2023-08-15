import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvAddComponent } from './nv-add.component';

describe('NvAddComponent', () => {
  let component: NvAddComponent;
  let fixture: ComponentFixture<NvAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
