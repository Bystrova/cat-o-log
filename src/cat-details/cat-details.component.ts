import { Component, Input } from '@angular/core';

const template = require('./cat-details.component.html');

import Cat from '../model/Cat';

@Component({
  selector: 'cat-details',
  template
})
export class CatDetailsComponent { 
  public name = 'Cat Details'; 
  @Input() public selectedCat : Cat;
}
