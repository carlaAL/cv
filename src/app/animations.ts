import { trigger, transition, style, animate } from '@angular/animations';

export const fadeUp = trigger('fadeUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'none' }))
  ])
]);
