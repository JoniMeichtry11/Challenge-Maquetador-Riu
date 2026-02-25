import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.html',
  styleUrl: './image.scss',
})
export class Image {
  src = input.required<string>();
  alt = input.required<string>();
  srcset = input<string>('');
  loading = input<'lazy' | 'eager'>('lazy');
}
