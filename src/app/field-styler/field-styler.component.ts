import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { FieldConfig } from './field-config.model';

@Component({
  selector: 'app-field-styler',
  templateUrl: './field-styler.component.html',
  styleUrls: ['./field-styler.component.scss']
})
export class FieldStylerComponent implements OnInit {

  @Input()
  fieldStyles: {[key: string]: FieldConfig};

  @Input()
  fields: string[];

  fontWeights = ['normal', 'bold'];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.fields.forEach(f => {
      let id = `${f}#LABEL`;
      let fieldStyle = new FieldConfig();
      fieldStyle.css = {};
      fieldStyle.title = f;
      this.fieldStyles[id] = fieldStyle;
    })
  }

  print() {
    console.log(this.fieldStyles)
  }
}
