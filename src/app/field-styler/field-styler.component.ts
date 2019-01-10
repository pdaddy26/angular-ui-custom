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


  dragElement;
  onDragStart(event, listItem) {
    console.log("start", listItem);
    this.dragElement = listItem;
    event.dataTransfer.effectAllowed = 'move';
  }

  onDragOver(event, listItem) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    return false;
  }

  onDragEnter(event, listItem) {
    // console.log("enter", listItem);
    if(this.dragElement === listItem) {
      this.renderer.addClass(this.dragElement, 'over');
      return;
    }
    let dragElId = this.dragElement.getAttribute('id')
    let enterItemId = listItem.getAttribute('id');
    
    let dragElIndex = this.fields.findIndex(f => f === dragElId);
    let enterElIndex = this.fields.findIndex(f => f === enterItemId);

    this.fields.splice(dragElIndex, 1);
    this.fields.splice(enterElIndex, 0, dragElId);
  }

  onDragEnd(event, listItem) {
    this.renderer.removeClass(this.dragElement, 'over');
  }

  onDrop(event, listItem) {
    console.log("drop", event, listItem);
    event.preventDefault();
    this.renderer.removeClass(this.dragElement, 'over');
  }
}
