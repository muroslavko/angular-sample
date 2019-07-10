import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appZoom]'
})
export class ZoomDirective {

    constructor(private el: ElementRef) {
        // console.log(this.el.nativeElement)
        // this.el.nativeElement.style.backgroundColor = 'red';
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.changeFontSize('2rem');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.changeFontSize(null);
    }

    private changeFontSize(size: string) {
        this.el.nativeElement.style['font-size'] = size;
    }

}
