import { NgIf } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-update-effect',
  standalone: true,
  imports: [NgIf],
  templateUrl: './update-effect.component.html',
  styleUrl: './update-effect.component.scss'
})
export class UpdateEffectComponent {

  @Input() type: 'update'|'effect' = 'update';

  quantity = signal<number>(0);

  increaseQuantity(): void {
    this.quantity.update( (cur) => cur + 1 );
  }

  decreaseQuantity(): void {
    this.quantity.update( (cur) => cur - 1 );
  }
}
