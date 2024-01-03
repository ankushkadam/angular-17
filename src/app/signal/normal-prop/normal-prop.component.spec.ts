import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalPropComponent } from './normal-prop.component';

describe('NormalPropComponent', () => {
  let component: NormalPropComponent;
  let fixture: ComponentFixture<NormalPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormalPropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NormalPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
