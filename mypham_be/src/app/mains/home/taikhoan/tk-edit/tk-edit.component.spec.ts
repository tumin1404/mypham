import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TkEditComponent } from './tk-edit.component';

describe('TkEditComponent', () => {
  let component: TkEditComponent;
  let fixture: ComponentFixture<TkEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TkEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
