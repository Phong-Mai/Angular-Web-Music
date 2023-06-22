import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer BQAf1aCwdFbtAE4JmrhK6pWZBg5GOQqyNn3FUlAdI3gFIiMVKttg1OnSz3t7wewWWtJ_J6n5MOXEpsuT3uppMy2yD1ueTCedQ49J4duOZ3V9-5Nh6iRv"
    })
}
  public getAllArtists(search:string) {
    let artistURL =`https://api.spotify.com/v1/search?q=${search}&type=artist`;
   return this.http.get<any>(artistURL, this.httpOptions);
}
 public getArtists(artistId: any)  {
    let artistURL =`https://api.spotify.com/v1/artists/${artistId}`;
    return this.http.get<any>(artistURL, this.httpOptions);
  }
  public getAllAlbums(artistId: any) {
    let albumURL = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this.http.get<any>(albumURL, this.httpOptions);
  }
  public getAlbum(albumId: any) {
    let albumURL = `https://api.spotify.com/v1/albums/${albumId}`;
    return this.http.get<any>(albumURL, this.httpOptions);
  }
  public getAllTracks(albumId: any) {
    let tracksURL = `https://api.spotify.com/v1/albums/${albumId}/tracks`;
    return this.http.get<any>(tracksURL, this.httpOptions);
  }
}
