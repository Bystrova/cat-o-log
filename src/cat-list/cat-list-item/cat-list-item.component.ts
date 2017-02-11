import {
  Component,
  Input
} from '@angular/core';

import Cat from '../../model/Cat';

@Component({
  selector: 'cat-list-item',
  template: `
        <div><a href="#">{{cat.name}}</a><span class="great-delete-button">[x]</span></div>
    `,
  styles: [`
    .great-delete-button {
      float: right;
      color: red;
      cursor: pointer;
    }
  `]
})
export class CatListItemComponent {
  @Input() public cat : Cat;
}
