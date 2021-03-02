import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;
  constructor(private elRef: ElementRef) { }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    // Better approach, only toggles the dropdown if the event is matching the target, otherwise it remains closed
    this.isOpen = this.elRef.nativeElement.contains(event.target)? !this.isOpen : false;
    
    //  Hacked approach, toggles all the dropdown on the page!!
    // this.isOpen = !this.isOpen;
  }
}
