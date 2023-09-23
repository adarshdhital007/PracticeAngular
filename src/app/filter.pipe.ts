import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();
    
    return items.filter(item => {
      // Extract the date property and convert it to a string
      const formattedDate = item.date.toDateString().toLowerCase();
      // Check if either the date or the name includes the searchTerm
      return formattedDate.includes(searchTerm) || item.name.toLowerCase().includes(searchTerm);
    });
  }
}
