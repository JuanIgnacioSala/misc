import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResalt]'
})
export class ResaltDirective {

  constructor(private el: ElementRef) {

    }

    @Input('appResalt') newColor: string;

    @HostListener('mouseenter') mouseEnter(){

      console.log(this.newColor);

      this.resalt(this.newColor || '#a52381' );
      this.el.nativeElement.style.color ='white';
   }
   @HostListener('mouseleave') mouseLeave(){

    this.resalt(null)
    this.el.nativeElement.style.color = null;
 }


 private resalt (color: string){
  this.el.nativeElement.style.backgroundColor = color;

 }

}

