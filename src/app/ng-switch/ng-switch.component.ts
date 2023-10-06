import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent {
  selectedSong = 'Love Story';
  songs = [
    { name: 'Love Story', description: 'A sweet and timeless love song that tells the story of two young hearts coming together against all odds.' },
    { name: 'Blank Space', description: 'An addictive pop hit where Taylor Swift opens up about the ups and downs of love in a catchy, unforgettable way.' },
    { name: 'You are in Love', description: 'A romantic song describing when you are in love deeply.' },
    { name: 'Bad Blood', description: 'A powerful song about a broken friendship, filled with raw emotion and a catchy beat.' },
  ];
  isDarkModeEnabled = false;



  // Toggle dark mode
  toggleDarkMode() {
    this.isDarkModeEnabled = !this.isDarkModeEnabled;
  }
  onSongClicked(event: Event) {
    const clickedSong = (event.target as HTMLElement).innerHTML.trim();
    this.selectedSong = clickedSong;
  }

  // Add this method to your component
  getSongDescription(songName: string): string {
    const song = this.songs.find(s => s.name === songName);
    return song ? song.description : '';
  }

  getSongStyle(song: string) {
    const isSelected = song === this.selectedSong;
    return {
      'selected': isSelected,
    };
  }
}