import { Component } from '@angular/core';
import { Image } from '../../atoms/image/image';
import { Icon } from '../../atoms/icon/icon';
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'app-hero',
  imports: [Image, Icon, Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

}
