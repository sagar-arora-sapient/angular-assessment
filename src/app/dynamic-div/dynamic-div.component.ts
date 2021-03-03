import { 
  ChangeDetectionStrategy, 
  Component, 
  ComponentFactoryResolver, 
  HostListener, 
  OnInit, 
  ViewChild
} from '@angular/core';
import { DynDivCmpComponent } from './dyn-div-cmp/dyn-div-cmp.component';
import { PlaceholderDirective } from './placeholder.directive';


@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicDivComponent implements OnInit {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  @HostListener('window:mousewheel', ['$event']) onScrollHost(e: Event): void {
    console.log('event');

    this.divsArray.push(this.showDiv('Sagar'));
    console.log(this.divsArray);
    // console.log(this.getYPosition(e));
  }

  @ViewChild(PlaceholderDirective, { static: true }) dynamicDiv: PlaceholderDirective;
  
  divsArray = [];
  
  ngOnInit(): void {
    this.divsArray.push();
    this.showDiv('hi');
  }

  private showDiv(message: string){
    const dynDivCmpFactory = this.componentFactoryResolver.resolveComponentFactory(DynDivCmpComponent);
    console.log('component',DynDivCmpComponent);
    console.log('factory', dynDivCmpFactory); 
    console.log('div found', this.dynamicDiv);
    const hostViewContainerRef = this.dynamicDiv.viewContainerRef;
    hostViewContainerRef.clear();

    hostViewContainerRef.createComponent(dynDivCmpFactory);
  }

}
