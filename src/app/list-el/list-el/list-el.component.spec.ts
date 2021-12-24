import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElComponent } from './list-el.component';

describe('ListElComponent', () => {
  let component: ListElComponent;
  let fixture: ComponentFixture<ListElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListElComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
