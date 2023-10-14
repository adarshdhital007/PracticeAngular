import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    const searchTerms = searchTerm.toLowerCase().split(' ');

    return items.filter(item => {
      const formattedDate = item.date.toDateString().toLowerCase();
      const formattedName = item.name.toLowerCase();

      return searchTerms.every(term => {
        // Check if any word in the search term is included in the date or name
        return formattedDate.includes(term) || formattedName.includes(term);
      });
    });
  }
}
