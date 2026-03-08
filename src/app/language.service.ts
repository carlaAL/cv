import { Injectable, signal } from '@angular/core';
import { RESUME_DATA, ResumeData } from './resume.data';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage = signal<'es' | 'en'>('es');
  data = signal<ResumeData>(RESUME_DATA['es']);

  toggleLanguage() {
    const newLang = this.currentLanguage() === 'es' ? 'en' : 'es';
    this.currentLanguage.set(newLang);
    this.data.set(RESUME_DATA[newLang]);
  }
}
