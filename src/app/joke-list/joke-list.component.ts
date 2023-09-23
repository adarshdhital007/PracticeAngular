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
      new Joke("Why don't scientists trust atoms?", "Because they make up everything!"),
      new Joke("What did one wall say to the other wall?", "I'll meet you at the corner!"),
      new Joke("Why was the math book sad?", "Because it had too many problems!"),
      new Joke("How does a penguin build its house?", "Igloos it together!"),
      new Joke("Why don't skeletons fight each other?", "Because they don't have the guts!"),
    ];
    
  }
  addJoke(joke:Joke) {
    this.jokes.unshift(joke);
}
}
