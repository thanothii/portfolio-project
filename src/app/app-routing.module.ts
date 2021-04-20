import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { PhotolioComponent } from './photolio/photolio.component';
import { BandComponent } from './band/band.component';
import { ArtComponent } from './art/art.component';
import { CateringComponent } from './catering/catering.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent}, 
  {path: 'home', component:HomeComponent},
  {path:'myblog', component:BlogComponent},
  {path:'photoblog', component:PhotolioComponent},
  {path:'bandweb', component:BandComponent},
  {path:'artweb', component:ArtComponent},
  {path:'caterweb', component:CateringComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
