import { Component } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-listmusic',
  templateUrl: './listmusic.component.html',
})
export class ListmusicComponent {
  artist: Array<any> = []
  search!: string
  constructor(private spotifyService: SpotifyService) { }

  loadData() {
    this.spotifyService.getAllArtists(this.search).subscribe(
      data => this.artist = data.artists.items
    )
  }
}
