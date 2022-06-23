import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}
  @HostBinding('style.boxShadow') boxShadow = '0px 0px 0px 0px';
  @HostBinding('style.transform') transform = '';

  @HostListener('mouseover') onHover() {
    this.boxShadow = '10px 10px 10px 10px #a19f9f';
    this.transform = 'Scale(1.1)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.boxShadow = '0px 0px 0px 0px';
    this.transform = 'Scale(1.0)';
  }
}
