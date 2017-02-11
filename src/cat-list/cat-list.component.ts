import {
  Component, Input, Output, EventEmitter
} from '@angular/core';
import Cat from '../model/Cat';

const template = require('./cat-list.component.html');

@Component({
  selector: 'cats-list',
  template,
})
export class CatListComponent {
  @Input() public catsList : Cat[];

  @Output() public onCatSelect : EventEmitter<Cat> = new EventEmitter<Cat>();

  public selectCat(cat : Cat) : void {
    this.onCatSelect.emit(cat);
  }
}
