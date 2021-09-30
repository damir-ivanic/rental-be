export interface Vehicle {
  id: number;
  make: string;
  model: string;
  milleage: number;
  color: string;
  plateNumber: string;
  engineSize: number;
  navigation: boolean;
  numberOfDoors: number;
  ac: AcType;
  fuelType: FuelType;
}

type AcType = 'manual' | 'automatic';
type FuelType = 'petrol' | 'disel' | 'tng';
