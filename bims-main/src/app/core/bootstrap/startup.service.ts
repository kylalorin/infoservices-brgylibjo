
import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { AuthService, User } from '../authentication';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  constructor(
    private authService: AuthService,
    private permissonsService: NgxPermissionsService,
    private rolesService: NgxRolesService
  ) {}

  /**
   * Load the application only after get the menu or other essential informations
   * such as permissions and roles.
   */
  load() {
    return new Promise<void>((resolve, reject) => {
      this.authService
        .change()
        .pipe(tap((user) => this.setPermissions(user)))
        .subscribe(
          () => resolve()
        );
    });
  }

  private setPermissions(user: User) {
    this.rolesService.flushRoles();
    this.permissonsService.flushPermissions();
    user.roles?.map((role) => this.rolesService.addRoleWithPermissions(role, []))
  }
}
