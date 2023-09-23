import { Component, EventEmitter, Input, Output } from '@angular/core';

export class Joke {

  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }

}
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
})
export class JokeComponent {

  @Input() joke!: Joke;
  @Output() jokeDeleted = new EventEmitter<any>();

  toggle() {
    this.joke.toggle();
  }
  onDelete() {
    // Emit the event to delete the joke
    this.jokeDeleted.emit(this.joke);
  }


}
