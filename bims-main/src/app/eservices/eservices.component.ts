import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eservices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eservices.component.html',
  styleUrls: ['./eservices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EservicesComponent {

}
