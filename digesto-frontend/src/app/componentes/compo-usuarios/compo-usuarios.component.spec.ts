import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompoUsuariosComponent } from './compo-usuarios.component';

describe('CompoUsuariosComponent', () => {
  let component: CompoUsuariosComponent;
  let fixture: ComponentFixture<CompoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
