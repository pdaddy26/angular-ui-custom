import { Component, OnInit, Input } from '@angular/core';
import { FieldConfig } from '../field-styler/field-config.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  fieldStyles: {[key: string]: FieldConfig};
  @Input()
  fields: string[];

  constructor() { }

  ngOnInit() {
  }

}
