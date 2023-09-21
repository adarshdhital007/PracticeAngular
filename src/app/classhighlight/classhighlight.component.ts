import { Component } from '@angular/core';

@Component({
  selector: 'app-classhighlight',
  templateUrl: './classhighlight.component.html',
  styles: [
    '.selected { color: white; background-color: red; padding: 10px; margin: 10px }',
    '.unselected { background-color: white; padding: 10px; margin: 10px }'
  ]
})
export class ClassHighlightComponent {
  selectedAnimal = 'cat';
  animals = ['cat', 'dog', 'zebra', 'giraffe'];

  onAnimalClicked(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedAnimal = target.innerText.trim();
    this.selectedAnimal = clickedAnimal;
  }
}