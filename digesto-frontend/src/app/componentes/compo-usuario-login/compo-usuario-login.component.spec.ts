import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoUsuarioLoginComponent } from './compo-usuario-login.component';

describe('CompoUsuarioLoginComponent', () => {
  let component: CompoUsuarioLoginComponent;
  let fixture: ComponentFixture<CompoUsuarioLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoUsuarioLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoUsuarioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
