import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FieldStylerComponent } from './field-styler/field-styler.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';

import { FormsModule } from '@angular/forms';
import { OrdableDirective } from './drag-n-drop/ordable.directive';
import { DragAndDropService } from './drag-n-drop/drag-and-drop.service';

@NgModule({
  declarations: [
    AppComponent,
    FieldStylerComponent,
    ListComponent,
    GridComponent,
    OrdableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DragAndDropService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
