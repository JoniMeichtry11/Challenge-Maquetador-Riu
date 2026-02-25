import { Component } from '@angular/core';
import { Hero } from '../shared/ui/organisms/hero/hero';
import { NewsGrid } from '../shared/ui/organisms/news-grid/news-grid';
import { FeaturedArticles } from '../shared/ui/organisms/featured-articles/featured-articles';

@Component({
  selector: 'app-home',
  imports: [Hero, NewsGrid, FeaturedArticles],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
