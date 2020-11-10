import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appAlphanumeric]'
})
export class AlphanumericDirective {

  constructor() { }

  // @HostListener('keyup', ['$event']) onKeyUp(e): boolean {
  // }
}
