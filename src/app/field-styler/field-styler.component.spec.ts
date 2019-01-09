import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldStylerComponent } from './field-styler.component';

describe('FieldStylerComponent', () => {
  let component: FieldStylerComponent;
  let fixture: ComponentFixture<FieldStylerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldStylerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldStylerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
