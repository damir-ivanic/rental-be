import { Body, Controller, Get, Post } from '@nestjs/common';
import { Vehicle } from './interfaces/vehicle.interfaces';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private vehiclesService: VehiclesService) {}

  @Post()
  async create(@Body() createVehicle: Vehicle) {
    this.vehiclesService.create(createVehicle);
  }

  @Get()
  async findAll(): Promise<Vehicle[]> {
    return this.vehiclesService.findAll();
  }
}
