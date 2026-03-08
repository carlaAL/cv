import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { fadeUp } from '../../animations';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  animations: [fadeUp]
})
export class Contact {
  languageService = inject(LanguageService);
}
