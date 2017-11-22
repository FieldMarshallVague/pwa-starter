import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import * as jp from '../plumb';

declare var jsPlumb: jp.JsPlumbInstance;

@Component({
  selector: 'app-graph-canvas',
  templateUrl: './graph-canvas.component.html',
  styleUrls: ['./graph-canvas.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GraphCanvasComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas;

  jpInstance: any;
  jpDefaults: jp.Defaults = {
    PaintStyle: { strokeWidth: 1 },
    Anchors: [['Left', 'Right', 'Bottom'], ['Top', 'Bottom']]
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    jsPlumb.ready(() => {
      this.jpDefaults.Container = this.canvas.nativeElement;
      this.jpInstance = jsPlumb.getInstance(this.jpDefaults);
    });
  }
}
