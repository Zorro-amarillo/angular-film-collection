import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(min: number | undefined): string {
    if (!min) {
      return '0min';
    }

    const hours = Math.floor(min / 60) ? `${Math.floor(min / 60)}h` : '';
    const minutes = min % 60 ? `${min % 60}min` : '';

    return `${hours} ${minutes}`.trim();
  }
}
