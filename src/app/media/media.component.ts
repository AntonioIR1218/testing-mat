import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  numeros: number[] = [];
  media: number = 0;
  desviacionEstandar: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  cargarDatos(): void {
    this.http.get('assets/data/numeros.txt', { responseType: 'text' })
      .subscribe(data => {
        this.numeros = data.split('\n').map(Number);
        this.calcularMedia();
        this.calcularDesviacionEstandar();
      });
  }

  calcularMedia(): void {
    const suma = this.numeros.reduce((acc, num) => acc + num, 0);
    this.media = suma / this.numeros.length;
  }

  calcularDesviacionEstandar(): void {
    const media = this.media;
    const sumaCuadrados = this.numeros.reduce((acc, num) => acc + Math.pow(num - media, 2), 0);
    this.desviacionEstandar = Math.sqrt(sumaCuadrados / this.numeros.length);
  }
}