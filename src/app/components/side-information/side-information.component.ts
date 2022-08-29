import { Component } from '@angular/core';
import { sideInformationComponentData } from '@shared/data.service';

@Component({
  selector: 'app-side-information',
  templateUrl: './side-information.component.html',
  styleUrls: ['./side-information.component.scss'],
})
export class SideInformationComponent {
  public data = sideInformationComponentData;
}
