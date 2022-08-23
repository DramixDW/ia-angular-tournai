import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTropBien]'
})
export class TropBienDirective {

  constructor(private element: ElementRef<HTMLDivElement>) { 
    this.element.nativeElement.style.rotate = '270deg';
    this.element.nativeElement.style.width = '200px';
    this.element.nativeElement.innerHTML = 'Ceci est un nouveau contenu';
    this.element.nativeElement.style.transitionDuration = '10s';
  }

  @HostListener('window:load') onMouseOver() {
    this.element.nativeElement.style.rotate = '0deg';
  }

}
