import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpEditComponent } from './sp-edit.component';

describe('SpEditComponent', () => {
  let component: SpEditComponent;
  let fixture: ComponentFixture<SpEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
