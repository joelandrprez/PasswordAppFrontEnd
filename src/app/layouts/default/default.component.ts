import { AfterViewInit, Component, OnInit,Renderer2, HostListener } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit,AfterViewInit {

  constructor(private renderer: Renderer2) {
    
   }
  ngAfterViewInit(): void {
    (window as any).custom($);
  }

  ngOnInit(): void {
    // this.checkScreenWidth();
  }

  // checkScreenWidth() {
  //   const screenWidth = window.innerWidth;
  //   const htmlElement = this.renderer.selectRootElement('body');
    
  //   if (screenWidth < 450) {
  //     // this.renderer.addClass(htmlElement, 'sidebar-toggled');
  //   } else {
  //     // this.renderer.removeClass(htmlElement, 'sidebar-toggled');
  //   }
  // }

  // // @HostListener('window:resize', ['$event'])
  // // onWindowResize(event: any) {
  // //   this.checkScreenWidth();
  // // }

}
