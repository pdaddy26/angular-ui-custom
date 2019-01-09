import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FieldStylerComponent } from './field-styler/field-styler.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FieldStylerComponent,
    ListComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
