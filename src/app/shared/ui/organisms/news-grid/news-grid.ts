import { Component } from '@angular/core';
import { NewsCard } from '../../molecules/news-card/news-card';

@Component({
  selector: 'app-news-grid',
  imports: [NewsCard],
  templateUrl: './news-grid.html',
  styleUrl: './news-grid.scss',
})
export class NewsGrid {
  articles = Array(6).fill(null);
}
