import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { fadeUp } from '../../animations';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  animations: [fadeUp]
})
export class Skills {
  languageService = inject(LanguageService);
}
