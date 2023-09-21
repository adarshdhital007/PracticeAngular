import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
})
export class NgSwitchComponent {
  selectedAnimal = 'cat';
  animals = ['cat', 'dog', 'zebra', 'giraffe'];

  onAnimalClicked(event: Event) {
    const clickedAnimal = (event.target as HTMLElement).innerHTML.trim();
    this.selectedAnimal = clickedAnimal;
  }

  getAnimalStyle(animal: string) {
    const isSelected = animal === this.selectedAnimal;
    return {
      'padding': '10px',
      'margin': '10px',
      'color': isSelected ? '#ffffff' : '#000000',
      'background-color': isSelected ? '#ff0000' : '#ffffff',
    };
  }
}
