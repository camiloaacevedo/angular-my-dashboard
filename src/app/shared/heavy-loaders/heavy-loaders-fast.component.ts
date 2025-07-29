import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full', cssClass ]">

      <ng-content />
  
    </section>
  `
})
export class HeavyLoadersFastComponent { 
  
  @Input({ required: true }) cssClass!: string;

  constructor() {
   console.log('HeavyLoader Fast creado');
  }
}
