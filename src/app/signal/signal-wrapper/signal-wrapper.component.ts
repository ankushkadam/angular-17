import { Component } from '@angular/core';
import { NormalPropComponent } from '../normal-prop/normal-prop.component';
import { SignalPropComponent } from '../signal-prop/signal-prop.component';
import { UpdateEffectComponent } from '../update-effect/update-effect.component';

@Component({
  selector: 'app-signal-wrapper',
  standalone: true,
  imports: [NormalPropComponent, SignalPropComponent, UpdateEffectComponent],
  templateUrl: './signal-wrapper.component.html',
  styleUrl: './signal-wrapper.component.scss'
})
export class SignalWrapperComponent {

}
