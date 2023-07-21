import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent {
  public announcements: any[] = [
    {
      message: 'Barangay Libjo has posted new announcement!',
      timestamp: 'a few moments ago',
    },
    {
      message: 'You may now claim your requested Certificate!',
      timestamp: '10 minutes ago',
    },
    {
      message: 'Your request is now being processed!',
      timestamp: '44 minutes ago',
    },
    {
      message: 'Your request has been sent!',
      timestamp: '1 hour ago',
    },
  ];
}
