import { Component } from '@angular/core';
import { Image } from '../../atoms/image/image';
import { Icon } from '../../atoms/icon/icon';

@Component({
  selector: 'app-news-card',
  imports: [Image, Icon],
  templateUrl: './news-card.html',
  styleUrl: './news-card.scss',
})
export class NewsCard {

}
