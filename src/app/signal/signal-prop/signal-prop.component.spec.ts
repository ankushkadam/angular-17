import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalPropComponent } from './signal-prop.component';

describe('SignalPropComponent', () => {
  let component: SignalPropComponent;
  let fixture: ComponentFixture<SignalPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalPropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
