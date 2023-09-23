import { Component,Output,EventEmitter } from '@angular/core';
import { Joke } from '../joke-list/joke/joke.component';

@Component({
  selector: 'app-joke-add',
  templateUrl: './joke-add.component.html',
  styleUrls: ['./joke-add.component.css']
})
export class JokeAddComponent {

  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup:string,punchline:string) {
    this.jokeCreated.emit(new Joke(setup,punchline));
}
}
