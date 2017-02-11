import {
  Injectable
} from '@angular/core';
import {
  Http,
  Headers
} from '@angular/http';

import Cat from '../model/Cat';

@Injectable()
export class CatService {
  private headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    })
  }

  public getCats(): Promise <Cat[]> {
    return this.http.get('http://localhost:8080/cats', this.headers).toPromise()
      .then(response => response.json() as Cat[]);
  }
}
