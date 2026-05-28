import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  readonly name = 'Sebastian N. Ternouski';
  readonly bio =
    'Computer Engineer, graduated from the National University of La Plata. ' +
    'FullStack developer. One of my hobbies is creating multimedia and IOT projects.';
  readonly email = 'nahuelternouski@gmail.com';
  readonly linkedin = 'https://www.linkedin.com/in/nternouski/';
  readonly github = 'https://github.com/nternouski';
}
