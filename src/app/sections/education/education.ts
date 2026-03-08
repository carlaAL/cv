import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';
import { fadeUp } from '../../animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  animations: [fadeUp]
})
export class Education {
  languageService = inject(LanguageService);
}
