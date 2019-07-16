import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  private person = {
    name: 'Camille',
    age: '29',
    gender: 'female',
  };

  constructor() {}

  public getPerson() {
    return this.person;
  }

  public updatePersonName(name: string) {
    this.person.name = name;
  }
}
