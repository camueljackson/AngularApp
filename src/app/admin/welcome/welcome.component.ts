import { Component, OnInit } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private welcomePerson: WelcomeService) {}

  ngOnInit() {}

  getName() {
    return this.welcomePerson.getPerson();
  }

  updateName() {
    this.welcomePerson.updatePersonName('Amy');
  }
}
