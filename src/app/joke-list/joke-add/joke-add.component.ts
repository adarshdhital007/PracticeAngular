import { Component, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke/joke.component';

@Component({
  selector: 'app-joke-add',
  templateUrl: './joke-add.component.html',
})
export class JokeAddComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();
  @Output() jokeDeleted = new EventEmitter<Joke>();
  
  constructor() {}

  createJoke(setup: string, punchline: string) {
    if(!setup || !punchline){
      alert('Can\'t proceed with empty fields');
      return;
    }
    // Check if the setup already exists in the parent component
    const newJoke = new Joke(setup, punchline);
    this.jokeCreated.emit(newJoke);
  }
}
