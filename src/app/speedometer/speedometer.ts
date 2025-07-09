import { CommonModule } from '@angular/common';
import { Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-speedometer',
  imports: [CommonModule],
  templateUrl: './speedometer.html',
  styleUrl: './speedometer.css'
})
export class Speedometer {
  speed = signal(0);

  acelerar() {
    this.speed.update(s => s + 5);
  }

  frenar() {
    this.speed.update(s => Math.max(0, s - 3));
  }

  reiniciar() {
    this.speed.set(0);
  }
}
