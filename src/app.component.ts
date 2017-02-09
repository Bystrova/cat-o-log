import { Component } from '@angular/core';

@Component({
  selector: 'cat-o-log',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }