import { Component, OnInit } from '@angular/core';
import { MediaComponent } from '../media/media.component'; 
@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent implements OnInit {
  mediaNumeros: number = 0;
  stddevNumeros: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.mediaNumeros = MediaComponent.media;
    this.stddevNumeros = MediaComponent.desviacionEstandar;
  }
}