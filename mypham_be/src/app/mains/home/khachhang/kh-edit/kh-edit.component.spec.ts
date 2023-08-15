import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhEditComponent } from './kh-edit.component';

describe('KhEditComponent', () => {
  let component: KhEditComponent;
  let fixture: ComponentFixture<KhEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
