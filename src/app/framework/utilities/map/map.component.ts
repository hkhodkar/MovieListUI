import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CorditnatesModel } from './cordinate.model';
import * as L from 'leaflet';
const iconRetinaUrl = './assets/marker-icon-2x.png';
const iconUrl = './assets/marker-icon.png';
const shadowUrl = './assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}

  @Input() initialCordinates: CorditnatesModel[] = [];
  @Output() onSelectedLocation = new EventEmitter<CorditnatesModel>();

  ngOnInit(): void {
    this.layers = this.initialCordinates.map((value) =>
      marker([value.latitude, value.longtitude])
    );
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'movies',
      }),
    ],
    zoom: 5,
    center: latLng(35.36889537510477, 51.4599609375),
  };

  layers: Marker<any>[] = [];

  handelClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longtitude = event.latlng.lng;
    this.layers = [];
    this.layers.push(marker([latitude, longtitude]));
    this.onSelectedLocation.emit({ latitude, longtitude });
  }
}
