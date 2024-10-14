import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let httpMock: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load data from the file and calculate media and std dev', waitForAsync(() => {
    const testData = '550.6\n542.67\n570.1\n550.5\n555';

    component.cargarDatos();

    const req = httpMock.expectOne('assets/data/numeros.txt');
    req.flush(testData);

    fixture.whenStable().then(() => {
      expect(MediaComponent.media).toBeCloseTo(553.774, 10); 
      expect(MediaComponent.desviacionEstandar).toBeCloseTo(9.078915353719315, 10); 
    });
  }));

  afterEach(() => {
    httpMock.verify(); 
  });
});