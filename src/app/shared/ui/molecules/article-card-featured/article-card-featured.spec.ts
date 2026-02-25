import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleCardFeatured } from './article-card-featured';

describe('ArticleCardFeatured', () => {
  let component: ArticleCardFeatured;
  let fixture: ComponentFixture<ArticleCardFeatured>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleCardFeatured],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleCardFeatured);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
