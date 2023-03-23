import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValidationContainerComponent } from './input-validation-container.component';

describe('InputValidationContainerComponent', () => {
  let component: InputValidationContainerComponent;
  let fixture: ComponentFixture<InputValidationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputValidationContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputValidationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
