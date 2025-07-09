import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Speedometer } from "./speedometer/speedometer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Speedometer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
