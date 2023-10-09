import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTestimoniosComponent } from './seccion-testimonios.component';

describe('SeccionTestimoniosComponent', () => {
  let component: SeccionTestimoniosComponent;
  let fixture: ComponentFixture<SeccionTestimoniosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionTestimoniosComponent]
    });
    fixture = TestBed.createComponent(SeccionTestimoniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
