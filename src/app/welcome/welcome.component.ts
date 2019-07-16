import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @Input() name: string;
  LoginOrOut: string = 'Login';
  userIsLoggedIn: boolean = false;
  isLoggedInClass: string = 'is-logged-in';
  states: string[] = ['Florida', 'Ohio', 'California', 'Texas'];
  carColor: string;

  cars: object[] = [
    {
      color: 'blue',
      name: 'chevy',
      purchaseDate: new Date(),
    },
    {
      color: 'red',
      name: 'ford',
      purchaseDate: new Date(),
    },
    {
      color: 'green',
      name: 'dodge',
      purchaseDate: new Date(),
    },
  ];

  constructor() {}

  getStates = () => {
    return this.states.map(item => item.toUpperCase());
  };

  addCar() {
    const newCar = {
      color: 'pink',
      name: 'gmc',
      purchaseDate: new Date(),
    };

    this.cars.push(newCar);
  }

  ngOnInit() {}
}
