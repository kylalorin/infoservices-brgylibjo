import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Sitio } from './data-access/sitio.interface';
import { AboutLibjoComponent } from './ui/about-libjo/about-libjo.component';
import { OrganizationChartComponent } from './ui/organization-chart/organization-chart.component';
import { SitioComponent } from './ui/sitio/sitio.component';
import { SliderAnnouncementComponent } from './ui/slider-announcement/slider-announcement.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { QuickMenuComponent } from './ui/quick-menu/quick-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SliderAnnouncementComponent,
    OrganizationChartComponent,
    SitioComponent,
    AboutLibjoComponent,
    QuickMenuComponent,
    NgxPermissionsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public sitios: Sitio[] = [
    { name: 'Lamao' },
    { name: 'Central' },
    { name: 'New San Vicente' },
    { name: "D'Hope" },
    { name: 'GK' },
    { name: 'Tangisan' },
    { name: 'Calejon' },
    { name: 'Takad' },
    { name: 'Old San Vicente' },
  ];

  ngOnInit(): void {}
}
