import {
  Component, OnInit
} from '@angular/core';

import { CatService } from './cat-list/cat.service';

import Cat from './model/Cat';

@Component({
  selector: 'cat-o-log',
  template: `
  <h2 class="header">Cat-o-Log</h2>
  <div class="root">
    <cats-list class="list" [catsList]="cats" (onCatSelect)="setSelectedCat($event)"></cats-list>
    <cat-details class="details" [selectedCat]="selectedCat"></cat-details>
  </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public cats : Cat[];
  public selectedCat : Cat;
  public name = 'Cat-o-Log!';

  constructor(private catService : CatService) {

  }

  public ngOnInit() : void {
    this.catService.getCats()
      .then(cats => {
        this.cats = cats;
        this.selectedCat = cats[0];
      });
  }

  public setSelectedCat(cat : Cat) : void {
    this.selectedCat = cat;
  }
}
