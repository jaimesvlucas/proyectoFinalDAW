import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasGeneralesComponent } from './listas-generales.component';

describe('ListasGeneralesComponent', () => {
  let component: ListasGeneralesComponent;
  let fixture: ComponentFixture<ListasGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasGeneralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
