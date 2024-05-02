import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ZonesListComponent} from "./components/zones-list/zones-list.component";
import {ZoneAddComponent} from "./components/zone-add/zone-add.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ZonesListComponent, ZoneAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'zones-frontend';
}
