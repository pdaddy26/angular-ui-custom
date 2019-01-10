import { Directive, HostListener, ElementRef, Input, Renderer2, HostBinding } from '@angular/core';
import { DragAndDropService } from './drag-and-drop.service';

@Directive({
  selector: '[appOrdable]'
})
export class OrdableDirective {

  @Input('appOrdable') fields: string[];

  constructor(private elementRef: ElementRef, 
    private renderer: Renderer2,
    private dndService: DragAndDropService) { }

  @HostBinding('draggable')
  get draggable() {
    return true;
  }
  
  @HostListener('dragstart', ['$event'])
  public onDragStart(e: any): void {
    console.log('dragstart', this.elementRef.nativeElement.id);
    e.dataTransfer.effectAllowed = 'move';
    this.dndService.dragElementRef = this.elementRef;
  }

  @HostListener('dragover', ['$event'])
  public onDragOver(e: any): void {
    e.preventDefault(); 
    e.dataTransfer.dropEffect = 'move';
  }


  @HostListener('dragenter', ['$event'])
  public onDragEnter(e: any): void {
    // let id = e.dataTransfer.getData('text/plain');
    // console.log('dragenter', this.elementRef.nativeElement.id, id);

    if(this.dndService.dragElementRef === this.elementRef) {
      this.renderer.addClass(this.dndService.dragElementRef.nativeElement, 'over');
      return;
    }
    let dragElId = this.dndService.dragElementRef.nativeElement.id;
    let enterItemId = this.elementRef.nativeElement.id;
    
    let dragElIndex = this.fields.findIndex(f => f === dragElId);
    let enterElIndex = this.fields.findIndex(f => f === enterItemId);

    this.fields.splice(dragElIndex, 1);
    this.fields.splice(enterElIndex, 0, dragElId);
  }


  @HostListener('dragend', ['$event'])
  public onDragEnd(e: any): void {
    this.renderer.removeClass(this.dndService.dragElementRef.nativeElement, 'over');
  }

  @HostListener('drop', ['$event'])
  public onDrop(e: any): void {
    e.preventDefault();
    this.renderer.removeClass(this.dndService.dragElementRef.nativeElement, 'over');
  }

}
