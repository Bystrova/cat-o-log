import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatListItemComponent } from './cat-list/cat-list-item/cat-list-item.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';

import { CatService } from './cat-list/cat.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, CatListComponent, CatDetailsComponent, CatListItemComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ CatService ]
})
export class AppModule { }
