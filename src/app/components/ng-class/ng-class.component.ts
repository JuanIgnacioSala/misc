import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: [
  ]
})
export class NgClassComponent implements OnInit {

  alert = 'alert-primary';

  // tslint:disable-next-line: ban-types
  propiedades: any = {
    Danger : false
  };
  load=false;


  constructor() { }

  ngOnInit(): void {
  }

  eject(){
    this.load = true;

    setTimeout(() => this.load = false, 3000);
  }
}
