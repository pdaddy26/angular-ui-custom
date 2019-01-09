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
  fields: string[]

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

  onDragStart(event, id) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', id);
    console.log("start", event.srcElement);
  }

  onDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    return false;
  }

  onDragEnter(event) {
    console.log("enter", event.srcElement);
  }

  onDragLeave(event) {
    console.log("leave", event.srcElement);
  }

  onDrop(event, id) {
    console.log("drop", event.srcElement);
    event.stopPropagation();
      
    let start_element_id = event.dataTransfer.getData("text/plain");
    console.log('swap', start_element_id, id);
    this.swap(start_element_id, id);
  }

  private swap(field1, field2) {
    let f1Index = this.fields.findIndex(f => f === field1);
    let f2Index = this.fields.findIndex(f => f === field2);
    this.fields[f1Index] = field2;
    this.fields[f2Index] = field1;
  }
}
