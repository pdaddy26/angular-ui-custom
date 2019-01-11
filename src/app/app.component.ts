import { Component, OnInit, Renderer2, ViewChildren, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { FieldConfig } from './field-styler/field-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  fields: string[];
  data: Array<Object>;

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

    this.data = [
      {
        "Material/Name": "Pepsi",
        "Material/Description": "Soft Drinks",
        "Material/LookupCode": "PEP",
        "Carrier/LookupCode": "FedEx",
        "LoadContainer/Name": "BigBox"
      },
      {
        "Material/Name": "Coke",
        "Material/Description": "Soft Drinks",
        "Material/LookupCode": "KO",
        "Carrier/LookupCode": "UPS",
        "LoadContainer/Name": "BlueBOX"
      }
    ]
  }
}
