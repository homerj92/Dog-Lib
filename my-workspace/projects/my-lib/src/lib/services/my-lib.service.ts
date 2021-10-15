import {Inject, Injectable} from '@angular/core';
import {MY_LIB_CONFIG} from '../my-lib-config';
import {IConfig} from '../interfaces/config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IResponseSuccess} from '../interfaces/response-success';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {
  url: string;
  constructor(
    @Inject(MY_LIB_CONFIG) private config: IConfig,
    private httpClient: HttpClient,
  ) {
    this.url = `${this.config.protocol}://${this.config.apiBaseUrl}/${this.config.root}/`;
  }


  getDogImage(): Observable<IResponseSuccess> {
    return this.httpClient.get<IResponseSuccess>(`${this.url}breeds/image/random`);
  }
}
