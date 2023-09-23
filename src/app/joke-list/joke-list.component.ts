import { Component } from '@angular/core';
import { Joke } from './joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
})
export class JokeListComponent {
  jokes: Joke[] = [];

  constructor() {
    this.jokes = [
      new Joke("Why don't scientists trust atoms?", "Because they make up everything!"),
      new Joke("What did one wall say to the other wall?", "I'll meet you at the corner!"),
      new Joke("Why was the math book sad?", "Because it had too many problems!"),
      new Joke("How does a penguin build its house?", "Igloos it together!"),
      new Joke("Why don't skeletons fight each other?", "Because they don't have the guts!"),
    ];
  }

  addJoke(newJoke: Joke) {
    // Check if the setup already exists
    const existingJoke = this.jokes.find(joke => joke.setup === newJoke.setup);

    if (existingJoke) {
      alert('A joke with the same setup already exists. Please try with a different setup.');
      return;
    }

    // If setup is unique, add the new joke
    this.jokes.unshift(newJoke);
  }
}
