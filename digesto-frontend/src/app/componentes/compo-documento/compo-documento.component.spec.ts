import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoDocumentoComponent } from './compo-documento.component';

describe('CompoDocumentoComponent', () => {
  let component: CompoDocumentoComponent;
  let fixture: ComponentFixture<CompoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoDocumentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
