import { Component } from '@angular/core';

@Component({
  selector: 'cats-list',
  template: `<h1>Hello {{name}}</h1>`
})
export class CatListComponent {
  public name = 'Cat List'; 
}
