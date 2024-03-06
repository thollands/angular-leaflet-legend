import { Component, OnDestroy, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Control, ControlPosition, DomEvent, ControlOptions } from 'leaflet';
import { IAppSymbology } from '../../symbology';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnDestroy, AfterViewInit {

  // variables
  private _map!: Map;
  public control!: Control;

  @ViewChild('legendControl') containerRef?: ElementRef<HTMLElement>;

  // inputs
  @Input() options!: ControlOptions;
  @Input({ required: true }) position!: ControlPosition; // leaflet control position string
  @Input({ required: true }) symbology!: IAppSymbology[]; // symbology object

  // set map
  @Input() set map(map: Map) {
    if (map) {
      this._map = map;
    }
  }

  ngAfterViewInit(): void {

    // _map and containerRef start empty, so need to check if set
    if (this._map && this.containerRef) {

      // save element
      const el = this.containerRef.nativeElement;

      // define new control class
      let LegendControl = Control.extend({
        onAdd(map: Map) {
          
          // disable click propagationm on HTML element
          DomEvent.disableClickPropagation(el);

          // return the element directly
          return el
        },
        onRemove(map: Map) { }
      });

      // timeout hack to make sure legend isn't loaded before ahead of other controls
      setTimeout(() => {

        // create control and add it to the map
        this.control = new LegendControl({
          position: this.position
        });
        
        this.control.addTo(this._map);

      }, 0);

    }

  }

  ngOnDestroy() {
    this._map.removeControl(this.control)
  }

}


