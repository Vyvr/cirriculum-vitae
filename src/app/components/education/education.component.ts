import { Component } from '@angular/core';
import { educationComponentData } from '@shared/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  public data = educationComponentData;

  public convertDateToString(date: Date | string | undefined): string {
    if (date === undefined) return '';    
    if (typeof date === 'string') {
      return date.charAt(0).toUpperCase() + date.slice(1);
    }
    return date.toLocaleDateString(undefined, {
      month: 'short',
      year: 'numeric',
    });
  }
}
