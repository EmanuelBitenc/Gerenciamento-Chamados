import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headerpages',
  imports: [],
  templateUrl: './headerpages.html',
  styleUrl: './headerpages.css',
})
export class Headerpages {
  @Input() TitlePage: string = '';
  @Input() SubtitlePage: string = '';
}
