import { Component } from '@angular/core';
import { Hero } from '../shared/ui/organisms/hero/hero';
import { NewsGrid } from '../shared/ui/organisms/news-grid/news-grid';

@Component({
  selector: 'app-home',
  imports: [Hero, NewsGrid],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
