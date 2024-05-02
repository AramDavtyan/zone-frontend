import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {ZoneService} from "../../services/zone.service";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {CommonModule} from "@angular/common";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-zone-add',
  templateUrl: './zone-add.component.html',
  styleUrls: ['./zone-add.component.scss'],
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    FormsModule,
    CommonModule,
    MatInput,
    MatLabel,
  ],
  standalone: true
})
export class ZoneAddComponent {
  constructor(private zoneService: ZoneService) {}

  onAddZone(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { name, points } = form.value;
    this.zoneService.addZone(name, points).subscribe(() => {
      form.resetForm();
      // Optionally: add a router navigation or a message to indicate success
    });
  }
}
