import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentList: { firstName: string; lastName: string; age: number }[] = [
    {
      firstName: 'Baba',
      lastName: 'Yaga',
      age: 77,
    },
    {
      firstName: 'Aleksei',
      lastName: 'Popovich',
      age: 30,
    },
    {
      firstName: 'Dobrynia',
      lastName: 'Nikitich',
      age: 34,
    },
    {
      firstName: 'Tygarin',
      lastName: 'Zmei',
      age: 233,
    },
    {
      firstName: 'Solovei',
      lastName: 'Razboinik',
      age: 26,
    },
  ];
}
