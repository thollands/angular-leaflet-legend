import { Component } from '@angular/core';
import { Map, MapOptions, tileLayer } from 'leaflet';
import { IAppSymbology } from './symbology';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  // map options
  public baseLayer = tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png');
  public mapOptions = {
    center: [0, 0],
    zoom: 4,
  } as MapOptions;

  // map object
  public map!: Map;

  /**
   * Callback function for when Leaflet map ready
   * @param map $event from callback (Leaflet Map object)
   */
  public onMapReady(map: Map): void {
    // save map object to component
    this.map = map;
  }

  readonly symbology: IAppSymbology[] = [
    {
      label: '0 to 1',
      colour: '#7b3294',
      minRange: 0,
      maxRange: 1
    },
    {
      label: '1 to 2',
      colour: '#c2a5cf',
      minRange: 1,
      maxRange: 2
    },
    {
      label: '2 to 3',
      colour: '#f7f7f7',
      minRange: 2,
      maxRange: 3
    },
    {
      label: '3 to 4',
      colour: '#a6dba0',
      minRange: 3,
      maxRange: 4
    },
    {
      label: '4 to 5',
      colour: '#008837',
      minRange: 4,
      maxRange: 5
    }
  ]

  readonly symbology2: IAppSymbology[] = [
    {
      label: '0 to 1',
      colour: '#d7191c',
      minRange: 0,
      maxRange: 1
    },
    {
      label: '1 to 2',
      colour: '#fdae61',
      minRange: 1,
      maxRange: 2
    },
    {
      label: '2 to 3',
      colour: '#ffffbf',
      minRange: 2,
      maxRange: 3
    },
    {
      label: '3 to 4',
      colour: '#a6d96a',
      minRange: 3,
      maxRange: 4
    },
    {
      label: '4 to 5',
      colour: '#1a9641',
      minRange: 4,
      maxRange: 5
    }
  ]

}
