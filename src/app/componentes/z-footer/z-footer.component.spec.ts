import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZFooterComponent } from './z-footer.component';

describe('ZFooterComponent', () => {
  let component: ZFooterComponent;
  let fixture: ComponentFixture<ZFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZFooterComponent]
    });
    fixture = TestBed.createComponent(ZFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
