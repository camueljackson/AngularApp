import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color',
  pure: false,
})
export class ColorPipe implements PipeTransform {
  transform(cars: any, carColor: string): any {
    if (!carColor) return cars;
    return cars.filter(car => car.color.includes(carColor));
  }
}
