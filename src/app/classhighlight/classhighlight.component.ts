import { Component } from '@angular/core';

@Component({
  selector: 'app-classhighlight',
  templateUrl: './classhighlight.component.html',
  styleUrls: ['./classhighlight.component.css']
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
