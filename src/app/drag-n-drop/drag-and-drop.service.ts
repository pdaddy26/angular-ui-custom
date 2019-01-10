import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {

  dragElementRef: ElementRef;
  constructor() { }
}
