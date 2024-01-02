import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  standalone: true,
  imports: [],
  templateUrl: './switch-case.component.html',
  styleUrl: './switch-case.component.scss'
})
export class SwitchCaseComponent {

  selectedCar!: string;

  getSelectedCar(selectedCar: any): void {
    this.selectedCar = selectedCar.target.value;
  }

}
