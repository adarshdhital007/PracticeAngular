import { Component, Input } from '@angular/core';
import { Joke } from './joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
})
export class JokeListComponent {
  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke("What do you call a fish with no eyes?", "Fsh!"),
      new Joke("What do you call a deer with no eyes?", "No idear!"),
      new Joke("What do you call a lazy kangaroo?", "A pouch potato!"),
      new Joke("What do you call a bee that can't make up its mind?", "A maybe!"),
    ];
  }
}
