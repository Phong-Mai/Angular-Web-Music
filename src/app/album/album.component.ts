import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
})
export class AlbumComponent {
   public albumId: string | null | undefined;
   public album:any;
   public tracks:any;
   constructor(private _activaredRoute:ActivatedRoute, private _spotifyService:SpotifyService){
    this._activaredRoute.paramMap.subscribe((paramMap:ParamMap) =>{
      this.albumId = paramMap.get('id')
    })
    this._spotifyService.getAlbum(this.albumId).subscribe(data =>{
      this.album = data;
    })
    this._spotifyService.getAllTracks(this.albumId).subscribe(data =>{
      this.tracks = data.items;
    })
   }
}
