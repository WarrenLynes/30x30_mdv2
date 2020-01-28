import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Car, CarsService } from '@mdv2/core-data';

@Component({
  selector: 'mdv2-mdv',
  templateUrl: './mdv.component.html',
  styleUrls: ['./mdv.component.scss']
})
export class MdvComponent implements OnInit {

  selectedCar: Car;
  cars$: Observable<any>;

  constructor(private service: CarsService) { }

  ngOnInit() {
    this.getCars();
  }

  resetCar() {
    this.selectedCar = null;
  }

  getCars() {
    this.cars$ = this.service.all();
  }

  selectCar(car: Car) {
    this.selectedCar = car;
  }

  deleteCar(car) {
    this.service.delete(car.id).subscribe(() => {
      this.getCars();
      this.resetCar();
    });
  }

  saveCar(car) {
    if (!car.id) {
      this.createCar(car);
    } else {
      this.updateCar(car);
    }
  }

  createCar(car) {
    this.service.create(car).subscribe(() => {
      this.getCars();
      this.resetCar();
    });
  }

  updateCar(car) {
    this.service.update(car).subscribe(() => {
      this.getCars();
      this.resetCar();
    });
  }

  cancel() {
    this.resetCar();
  }
}
