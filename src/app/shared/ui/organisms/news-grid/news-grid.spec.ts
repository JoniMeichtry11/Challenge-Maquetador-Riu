import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsGrid } from './news-grid';

describe('NewsGrid', () => {
  let component: NewsGrid;
  let fixture: ComponentFixture<NewsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
