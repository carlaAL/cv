import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';
import { fadeUp } from '../../animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
  animations: [fadeUp]
})
export class Certifications {
  languageService = inject(LanguageService);
}
