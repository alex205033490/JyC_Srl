import { Component, ViewChild, OnInit, Renderer} from '@angular/core';

/**
 * Generated class for the AccordionObraComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion-obra',
  templateUrl: 'accordion-obra.html'
})
export class AccordionObraComponent implements OnInit {

  accordionObraComponent = false;
  @ViewChild("cc") cardContent : any; 

  constructor(public renderer: Renderer) {

  }

  ngOnInit(){

    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition","max-height 500ms, padding 500ms");


  }

  toggleAccordion(){

    if (this.accordionObraComponent){

      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding","0px 16px");

    }else{
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding","13px 16px");


    }

    this.accordionObraComponent = !this.accordionObraComponent;

  }

}
