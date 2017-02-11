import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatListItemComponent } from './cat-list/cat-list-item/cat-list-item.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CatPictureComponent } from './cat-details/cat-picture/cat-picture.component';

import { CatService } from './cat-list/cat.service';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule],
  declarations: [AppComponent, CatListComponent, CatDetailsComponent, CatListItemComponent, CatPictureComponent],
  bootstrap: [AppComponent],
  providers: [CatService]
})
export class AppModule { }
