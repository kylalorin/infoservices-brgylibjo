import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../core';
import { debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  #authService = inject(AuthService);
  #cdr = inject(ChangeDetectorRef);
  user!: User;

  ngOnInit() {
    this.#authService
      .user()
      .pipe(
        tap((user) => (this.user = user)),
        debounceTime(10)
      )
      .subscribe(() => this.#cdr.detectChanges());
  }

}
