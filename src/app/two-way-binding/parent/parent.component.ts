import { Component, OnInit } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <div class="wrapper">
      <h2><code>Custom Two-way Binding</code> Example </h2>
      <app-counter [(counter)]="initialCounter"></app-counter>
      <h6>Counter value is : {{initialCounter}}</h6>
    </div>
  `,
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
  initialCounter: number = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.initialCounter = 0;
    }, 10000)
  }
}
