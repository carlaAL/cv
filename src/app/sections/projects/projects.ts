import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';
import { fadeUp } from '../../animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  animations: [fadeUp]
})
export class Projects {
  languageService = inject(LanguageService);
}
