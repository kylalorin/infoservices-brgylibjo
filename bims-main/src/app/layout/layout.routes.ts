import { Routes } from "@angular/router";

export default [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: 'homepage',
    loadComponent: () => import('../home/home.component').then(m => m.HomeComponent),
    title: 'Home'
  },
  {
    path: 'profile',
    loadComponent: () => import('../profile/profile.component').then(m => m.ProfileComponent),
    title: 'Profile'
  },
  {
    path: 'notification',
    loadComponent: () => import('../notification/notification.component').then(m => m.NotificationComponent),
    title: 'Notification'
  },
  {
    path: 'e-services',
    loadComponent: () => import('../eservices/eservices.component').then(m => m.EservicesComponent),
    title: 'E-Services',
    data: {
      permissions: {
        only: ['ROLE_RESIDENT'],
        redirectTo: 'admin/dashboard'
      }
    }
  },
  {
    path: 'polls',
    loadComponent: () => import('../poll/poll.component').then(m => m.PollComponent),
    title: 'Polls',
    data: {
      permissions: {
        only: ['ROLE_RESIDENT'],
        redirectTo: 'admin/dashboard'
      }
    }
  },
  {
    path: 'add-post',
    loadComponent: () => import('../post/post.component').then(m => m.PostComponent),
    title: 'Posts',
    data: {
      permissions: {
        only: ['ROLE_RESIDENT'],
        redirectTo: 'admin/dashboard'
      }
    }
  },
  {
    path: 'contact-us',
    loadComponent: () => import('../contact-us/contact-us.component').then(m => m.ContactUsComponent),
    title: 'Contact Us',
    data: {
      permissions: {
        only: ['ROLE_RESIDENT'],
        redirectTo: 'admin/dashboard'
      }
    }
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('../admin/admin.component').then((m) => m.AdminComponent),
    loadChildren: () =>
      import('../admin/admin.routes').then((admin) => admin.ADMIN_ROUTES)
  }
] as Routes;
