import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhAddComponent } from './kh-add.component';

describe('KhAddComponent', () => {
  let component: KhAddComponent;
  let fixture: ComponentFixture<KhAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
