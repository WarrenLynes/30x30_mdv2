import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsService } from './cars/cars.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  imports: [CommonModule],
  providers: [AuthService, CarsService]
})
export class CoreDataModule {}
