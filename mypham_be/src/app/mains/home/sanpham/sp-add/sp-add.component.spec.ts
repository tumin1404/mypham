import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpAddComponent } from './sp-add.component';

describe('SpAddComponent', () => {
  let component: SpAddComponent;
  let fixture: ComponentFixture<SpAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
