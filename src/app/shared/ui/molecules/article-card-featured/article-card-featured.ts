import { Component } from '@angular/core';
import { Image } from '../../atoms/image/image';
import { Icon } from '../../atoms/icon/icon';

@Component({
  selector: 'app-article-card-featured',
  imports: [Image, Icon],
  templateUrl: './article-card-featured.html',
  styleUrl: './article-card-featured.scss',
})
export class ArticleCardFeatured {}
