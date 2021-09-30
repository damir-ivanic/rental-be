import { Injectable } from '@nestjs/common';
import { Vehicle } from './interfaces/vehicle.interfaces';

@Injectable()
export class VehiclesService {
  private readonly vehicles: Vehicle[] = [];

  create(vehicle: Vehicle) {
    this.vehicles.push(vehicle);
  }

  findAll(): Vehicle[] {
    return this.vehicles;
  }
}
