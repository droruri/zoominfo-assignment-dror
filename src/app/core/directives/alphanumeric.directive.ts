import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appAlphanumeric]'
})
export class AlphanumericDirective {

  constructor() { }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent): void {
    //maybe it will be better to put regex here
    if ((event.key >= '0' && event.key <= '9') || (event.key >= 'A' && event.key <= 'z')) {
      return;
    }

    event.preventDefault();
  }
}
