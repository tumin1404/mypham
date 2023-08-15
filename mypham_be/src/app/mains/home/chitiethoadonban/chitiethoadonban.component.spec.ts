import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitiethoadonbanComponent } from './chitiethoadonban.component';

describe('ChitiethoadonbanComponent', () => {
  let component: ChitiethoadonbanComponent;
  let fixture: ComponentFixture<ChitiethoadonbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitiethoadonbanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChitiethoadonbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
