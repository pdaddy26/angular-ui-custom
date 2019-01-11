import { Component, OnInit, Input } from '@angular/core';
import { FieldConfig } from '../field-styler/field-config.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input()
  fieldStyles: FieldConfig[];
  @Input()
  fields: string[];
  
  constructor() { }

  ngOnInit() {
  }

  getStyle(id) {
    let s = this.fieldStyles.find(f => f.id === id);
    return s;
  }

}
