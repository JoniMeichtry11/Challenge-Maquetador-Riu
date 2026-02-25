import { Component } from '@angular/core';
import { ArticleCardFeatured } from '../../molecules/article-card-featured/article-card-featured';

@Component({
  selector: 'app-featured-articles',
  imports: [ArticleCardFeatured],
  templateUrl: './featured-articles.html',
  styleUrl: './featured-articles.scss',
})
export class FeaturedArticles {}
