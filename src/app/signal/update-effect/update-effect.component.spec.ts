import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEffectComponent } from './update-effect.component';

describe('UpdateEffectComponent', () => {
  let component: UpdateEffectComponent;
  let fixture: ComponentFixture<UpdateEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEffectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
