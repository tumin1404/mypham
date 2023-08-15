import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LspAddComponent } from './lsp-add.component';

describe('LspAddComponent', () => {
  let component: LspAddComponent;
  let fixture: ComponentFixture<LspAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LspAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LspAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
