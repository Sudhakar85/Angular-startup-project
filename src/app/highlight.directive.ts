import { Directive , ElementRef, HostListener, Input} from '@angular/core';
import { Element } from '@angular/compiler';
import { element } from 'protractor';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color:string;
  constructor(public element:ElementRef) {
    element.nativeElement.style.backgroundColor = this.color;

   }

   @HostListener('mouseenter') onmouseenter()
   {
      //this.element.nativeElement.style.backgroundColor =  "yellow";
   }

   @HostListener('mouseleave') onMouseLeave()
   {
      //this.element.nativeElement.style.backgroundColor = "red";
   }
}
