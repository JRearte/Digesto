import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoCaracteristicaComponent } from './compo-caracteristica.component';

describe('CompoCaracteristicaComponent', () => {
  let component: CompoCaracteristicaComponent;
  let fixture: ComponentFixture<CompoCaracteristicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoCaracteristicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoCaracteristicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
