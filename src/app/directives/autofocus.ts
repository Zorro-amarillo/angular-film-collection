import { Directive, inject, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class Autofocus implements AfterViewInit {
  private inputElementRef = inject(ElementRef);

  ngAfterViewInit() {
    this.inputElementRef.nativeElement.focus();
  }
}
