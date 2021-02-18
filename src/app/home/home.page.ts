import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../services/artists/artists.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items: any;

  constructor( private artistsService: ArtistsService ) {}

  ngOnInit() {
    this.getArtists();
  }

  getArtists(){
    this.artistsService.getArtists().subscribe(
      (res) => {
        this.items = res.artists;
      });
  }
}
