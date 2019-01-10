import { Component, OnInit } from '@angular/core';
import { FieldConfig } from './field-styler/field-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  fieldStyles: {[key: string]: FieldConfig} = {}
  fields: string[];

  ngOnInit() {
    this.fields = [
      "Material/Name",
      "Material/Description",
      "Material/LookupCode",
      "Carrier/LookupCode",
      "LoadContainer/Name"
    ];
  }

}
