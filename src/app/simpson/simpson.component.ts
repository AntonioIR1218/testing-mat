import { Component } from '@angular/core';
import { SimpsonRule } from './simpson_rule';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  result1: number = 0;
  result2: number = 0;
  result3: number = 0;

  constructor() {
    this.calculateResults();
  }

  calculateResults(): void {
    this.result1 = SimpsonRule.simpson(0, 4, 4, 0.0001, SimpsonRule.fx_2x);
    this.result2 = SimpsonRule.simpson(0, 1, 4, 0.0001, SimpsonRule.fx_x2);
    this.result3 = SimpsonRule.simpson(1, 4, 6, 0.001, SimpsonRule.fx_1_x);
  }
}