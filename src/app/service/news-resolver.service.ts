import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsResolver implements Resolve<any> {

  constructor(private http: HttpClient) { }

  resolve(): Observable<any> {
    let newsUrl = 'https://httpbin.org/post';
    let news = 'The sky is blue'; //Mock data to be returned by test API

    return this.http.post(newsUrl, news).pipe(
      map( (dataFromApi) => dataFromApi ),
      catchError( (err) => Observable.throw(err.json().error) )
    )
  }
}
