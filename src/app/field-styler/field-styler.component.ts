import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { FieldConfig } from './field-config.model';

@Component({
  selector: 'app-field-styler',
  templateUrl: './field-styler.component.html',
  styleUrls: ['./field-styler.component.scss']
})
export class FieldStylerComponent implements OnInit {

  fieldStyles: FieldConfig[] = new Array<FieldConfig>();

  @Input()
  fields: string[];

  fontWeights = ['normal', 'bold'];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.fields.forEach(f => {
      let id = `${f}#LABEL`;
      let fieldStyle = new FieldConfig();
      fieldStyle.id = id;
      fieldStyle.css = {};
      fieldStyle.title = f;
      this.fieldStyles.push(fieldStyle);
    })
  }

  getStyle(id) {
    return this.fieldStyles.find(f => f.id === id);
  }

  print() {
    console.log(this.fieldStyles)
  }
}
