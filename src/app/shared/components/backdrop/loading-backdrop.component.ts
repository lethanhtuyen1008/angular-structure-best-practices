import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-backdrop',
  template: `
    <div class="loading-backdrop">
      <span class="loader"></span>
    </div>
  `,
  styleUrls: ['./loading-backdrop.component.scss'],
  standalone: true,
})
export class LoadingBackdropComponent {}
