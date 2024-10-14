import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { MediaComponent } from '../media/media.component'; 

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StddevComponent] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly access media and stddev from MediaComponent', () => {
    // Simulamos los valores de MediaComponent
    MediaComponent.media = 553.774;
    MediaComponent.desviacionEstandar = 9.0789;

    component.ngOnInit(); // Ejecuta el ciclo de vida para actualizar los valores

    expect(component.mediaNumeros).toBeCloseTo(553.774, 10);
    expect(component.stddevNumeros).toBeCloseTo(9.0789, 10);
  });
});