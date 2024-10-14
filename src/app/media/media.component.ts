import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  numeros: number[] = [];
  static media: number = 0;  
  static desviacionEstandar: number = 0;  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   // this.cargarDatos();  
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
    MediaComponent.media = suma / this.numeros.length; 
  }

  calcularDesviacionEstandar(): void {
    const media = MediaComponent.media;  
    const sumaCuadrados = this.numeros.reduce((acc, num) => acc + Math.pow(num - media, 2), 0);
    MediaComponent.desviacionEstandar = Math.sqrt(sumaCuadrados / this.numeros.length);  
  }
}