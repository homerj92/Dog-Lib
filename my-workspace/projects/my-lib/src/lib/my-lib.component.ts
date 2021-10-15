import { Component, OnInit } from '@angular/core';
import {MyLibService} from './services/my-lib.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'lib-my-lib',
  template: `
    <button (click)="getDogImage()">Get Image</button>
    <div style="margin-top: 1em" *ngIf="dogImage$ | async as image">
      <img src="{{image}}" alt="image"/>
    </div>
  `,
  styles: []
})
export class MyLibComponent implements OnInit {
  dogImage$: Observable<string>;
  constructor( private service: MyLibService) { }

  ngOnInit(): void {}

  getDogImage(): void {
    this.dogImage$ = this.service.getDogImage().pipe(
      map(res => res.message)
    );
  }
}
