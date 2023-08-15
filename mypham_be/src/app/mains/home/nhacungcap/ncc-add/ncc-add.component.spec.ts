import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NccAddComponent } from './ncc-add.component';

describe('NccAddComponent', () => {
  let component: NccAddComponent;
  let fixture: ComponentFixture<NccAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NccAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NccAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
