import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CatListComponent } from './cats-list/cat-list.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CatListComponent, CatDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
