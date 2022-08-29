import { Component } from '@angular/core';
import { workComponentData } from '@shared/data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  public data = workComponentData;

  public convertDateToString(date: Date | string): string {
    if (typeof date === 'string') {
      return date.charAt(0).toUpperCase() + date.slice(1);            
    }
    return date.toLocaleDateString(undefined, {
      month: 'short',
      year: 'numeric',
    });
  }
}
