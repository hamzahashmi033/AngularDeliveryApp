import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputContainerComponent } from './text-input-container.component';

describe('TextInputContainerComponent', () => {
  let component: TextInputContainerComponent;
  let fixture: ComponentFixture<TextInputContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
