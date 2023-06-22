import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';

import { ListmusicComponent } from './listmusic/listmusic.component';

const routes: Routes = [
  {path:'', component: ListmusicComponent},
  {path:'artists/:id', component: ArtistComponent},
  {path:'albums/:id', component: AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
