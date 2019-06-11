import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

@NgModule({
  imports: [
    CommonModule
  ],
  })
export class HeroFormComponent implements OnInit {

  newHero() {
    this.model = new Hero(42, '', '');
  }

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer', 'Soft and Smart', 'Systematic and Progressive', 'Observant', 'Class Coach'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  


  get diagnotic() { return JSON.stringify(this.model); }


  constructor() {
    let myHero = new Hero(42, 'SkyDog',
      'Fetch any object at any distance',
      'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"

  }

  ngOnInit() {
    let i: number = 1
    while (i <= 10) {
      if (i % 5 == 0) {
        console.log("The first multiple of 5 betweeen 1 and 10 is : " + i)
        break // exit the loop if the first multiple is found
      }
      i++
      //output 5 and exits the loop
      let num: number = 0
      let count: number = 0
      for (num = 0; num <= 20; num++) {
        if (num % 2 == 0) {
          continue
        }
        count++
      }
      
         }
  }
}
