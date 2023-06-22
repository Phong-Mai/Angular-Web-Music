import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent {
 public artistId:any;
 public artist:any;
 public albums:any;
 constructor(private _activatedRoute:ActivatedRoute, private _spotifyService:SpotifyService){ 
  this._activatedRoute.paramMap.subscribe((param: ParamMap) =>{
    this.artistId = param.get('id');
  });
  this._spotifyService.getArtists(this.artistId).subscribe(data => {
    this.artist = data
  })
 this._spotifyService.getAllAlbums(this.artistId).subscribe(data => {
    this.albums = data.items
    console.log(this.albums);
  });
  }
}

