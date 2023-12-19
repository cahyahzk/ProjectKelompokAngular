import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableItemsComponent } from './scrollable-items.component';

describe('ScrollableItemsComponent', () => {
  let component: ScrollableItemsComponent;
  let fixture: ComponentFixture<ScrollableItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollableItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
