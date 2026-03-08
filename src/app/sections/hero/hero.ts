import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { fadeUp } from '../../animations';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  animations: [fadeUp]
})
export class Hero {
  languageService = inject(LanguageService);
}
