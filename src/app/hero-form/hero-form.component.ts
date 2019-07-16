import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  powers: string[] = ['Super Strenght', 'Invisibility', 'Time Travel', 'Super Speed'];

  model = new Hero(29, 'Amy Sauvignon', 'Time Travel');

  constructor() {}

  ngOnInit() {}

  onSubmit(heroForm: NgForm) {
    console.log(this.model);
    console.log(heroForm);
  }
}
