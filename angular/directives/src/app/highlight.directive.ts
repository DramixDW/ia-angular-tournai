import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  declare originalBackGround: string;

  constructor(private element: ElementRef<HTMLDivElement>) {
      this.element.nativeElement.style.width = '200px';
      this.element.nativeElement.style.paddingTop = '350px';
      this.originalBackGround = this.element.nativeElement.style.backgroundColor;
   }

   @HostListener('mouseover') onMouseOver() {
      this.element.nativeElement.style.backgroundColor = 'purple';
   }

   @HostListener('mouseout') onMouseOut() {
      this.element.nativeElement.style.backgroundColor = this.originalBackGround;
   }

}
