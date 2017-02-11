import {
  Component,
  Input,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'cat-picture',
  template: `
        <img *ngIf="isPictureVisible" [src]="'public/cats/cat-' + photoId + '.jpg'" alt="cat picture" class="resize"
         (error)="handleImgLoadError($event)"
        >
    `,
  styles: [`
    img {
      float: right;
    }
    .resize {
      width: 500px;
      height: auto;
    }
  `]
})
export class CatPictureComponent implements OnChanges {
  @Input() public photoId : number;
  public isPictureVisible = true;

  public handleImgLoadError() : void {
    this.isPictureVisible = false;
  }

  public ngOnChanges() : void {
    this.isPictureVisible = true;
  }
}
