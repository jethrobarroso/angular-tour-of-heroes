import { MessageService } from './../message.service';
import { HeroService } from '../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroSerice: HeroService, private messageService: MessageService) { }

  heroes: Hero[] = [];

  getHeroes(): void {
    this.heroSerice.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
