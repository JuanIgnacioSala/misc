import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tam" >
      Hello world, etiquet HTML
    </p>
    <button class="btn btn-primary" (click)="tam=tam+5">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
    <button class="btn btn-primary" (click)="tam=tam-5" >
      <i class="fa fa-minus" aria-hidden="true"></i>
    </button>
  `,
  styles: [
    ]
})
export class NgStyleComponent implements OnInit {

  tam = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
