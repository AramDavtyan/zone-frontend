import { Component, OnInit } from '@angular/core';
import {ZoneService} from "../../services/zone.service";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {CommonModule, JsonPipe} from "@angular/common";


@Component({
  selector: 'app-zones-list',
  templateUrl: './zones-list.component.html',
  styleUrls: ['./zones-list.component.scss'],
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatList,
    MatListItem,
    JsonPipe,
    CommonModule,
  ],
  standalone: true
})
export class ZonesListComponent implements OnInit {
  zones: any[] = [];

  constructor(private zoneService: ZoneService) {}

  ngOnInit(): void {
    this.zoneService.getZones().subscribe((zones: any[]) => {
      this.zones = zones;
    });
  }

  onDeleteZone(id: number): void {
    console.log('zones', this.zones[13]['_1']);
    console.log('id', id);
    id && this.zoneService.deleteZone(id).subscribe(() => {
      this.zones = this.zones.filter(zone => zone.id !== id);
    });
  }
}
