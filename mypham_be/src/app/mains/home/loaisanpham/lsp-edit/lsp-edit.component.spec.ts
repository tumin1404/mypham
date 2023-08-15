import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LspEditComponent } from './lsp-edit.component';

describe('LspEditComponent', () => {
  let component: LspEditComponent;
  let fixture: ComponentFixture<LspEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LspEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LspEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
