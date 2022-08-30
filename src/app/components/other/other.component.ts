import { Component } from '@angular/core';
import { otherComponentData } from '@shared/data.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
})
export class OtherComponent {
  public data = otherComponentData;
}
