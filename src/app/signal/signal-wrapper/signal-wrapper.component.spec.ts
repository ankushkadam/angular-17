import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalWrapperComponent } from './signal-wrapper.component';

describe('SignalWrapperComponent', () => {
  let component: SignalWrapperComponent;
  let fixture: ComponentFixture<SignalWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
