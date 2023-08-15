import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TkAddComponent } from './tk-add.component';

describe('TkAddComponent', () => {
  let component: TkAddComponent;
  let fixture: ComponentFixture<TkAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TkAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
