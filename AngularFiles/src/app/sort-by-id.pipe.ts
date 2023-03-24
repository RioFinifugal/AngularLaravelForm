import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortById'
})
export class SortByIdPipe implements PipeTransform {
  transform(data: any[], field: string, reverse: boolean = false): any[] {
    if (!data) {
      return [];
    }
    const sortedData = data.sort((a, b) => {
      return a[field] - b[field];
    });

    return reverse ? sortedData.reverse() : sortedData;
  }
}