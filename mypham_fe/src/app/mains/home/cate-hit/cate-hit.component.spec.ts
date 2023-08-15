import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateHitComponent } from './cate-hit.component';

describe('CateHitComponent', () => {
  let component: CateHitComponent;
  let fixture: ComponentFixture<CateHitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateHitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CateHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
