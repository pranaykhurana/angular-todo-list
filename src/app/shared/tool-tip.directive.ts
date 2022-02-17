import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import tippy from "tippy.js";

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements AfterViewInit{

  @Input('appToolTip') toolTipContent: string;

  constructor(
    private el: ElementRef
  ) { }

  ngAfterViewInit(): void {
    tippy(this.el.nativeElement, {
      content: this.toolTipContent
    })
  }

}
