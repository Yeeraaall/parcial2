import { Component, OnInit } from '@angular/core';
import { Anime } from './anime';
import {dataAnime} from './dataAnime'
import { AnimeService } from './anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {



  anime:Array<Anime>= [];
  constructor(private animeService: AnimeService) { }
  

  getAnimes(): Array<Anime> {
    this.animeService.getAnimes().subscribe(animes => {
      this.animes = animes;
    
  }

  ngOnInit() {
    this.getAnimes();
  }

}
