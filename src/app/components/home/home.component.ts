import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  template: `


<div class="container">
    <app-ng-style></app-ng-style>
    <hr>
</div>
<div class="container">
    <app-css></app-css>

    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, facilis assumenda voluptate sequi repellendus aliquam accusantium ipsa praesentium minus animi aut aliquid exercitationem dolores vitae totam molestias vel quo dolorem.
    </p>
    <hr>
</div>
<div class="container">
    <app-ng-class></app-ng-class>
    <hr>
    <br>
</div>

<div class="container">
    <p [appResalt]="'black'"> Hello World
    </p>
    <hr>
</div>
<div class="container"></div>
<app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
// tslint:disable-next-line: max-line-length
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("NGONINIT");
  }

  ngOnChanges (){
    console.log('ngOnChanges');
  }
  ngDoCheck(){
    console.log('ngDoCheck');
  }
   ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
}
