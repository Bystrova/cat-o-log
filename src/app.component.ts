import {
  Component
} from '@angular/core';

@Component({
  selector: 'cat-o-log',
  template: `<h1>Hello {{name}}
    <cats-list></cats-list>
    <cat-details></cat-details>
  </h1>`
})
export class AppComponent {
  public name = 'Angular';
}
