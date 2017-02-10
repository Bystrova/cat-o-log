import { Component } from '@angular/core';

@Component({
  selector: 'cat-details',
  template: `<h1>Hello {{name}}</h1>`
})
export class CatDetailsComponent { public name = 'Cat Details'; }
