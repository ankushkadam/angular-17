import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <div class="counter-wrapper">
      {{counter}}
    </div>
  `,
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {
  
  @Input() counter: number = 0;

  @Output() counterChange: EventEmitter<number> =  new EventEmitter<number>()

  ngOnInit(): void {
    setInterval( () => {
      this.counter += 1;
      this.counterChange.emit(this.counter);
    }, 1000);
  }
}
