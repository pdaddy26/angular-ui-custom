import { Component, OnInit, Renderer2, ViewChildren, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { FieldConfig } from './field-styler/field-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  fieldStyles: {[key: string]: FieldConfig} = {}
  fields: string[];

  @ViewChild('styleContainer') styleContainer: ElementRef;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
    this.fields = [
      "Material/Name",
      "Material/Description",
      "Material/LookupCode",
      "Carrier/LookupCode",
      "LoadContainer/Name"
    ];
  }

  toggle() {
    if(this.styleContainer.nativeElement.classList.contains('hide')) {
      this.renderer.removeClass(this.styleContainer.nativeElement, 'hide');
    }
    else {
      this.renderer.addClass(this.styleContainer.nativeElement, 'hide');
    }
  }

}
