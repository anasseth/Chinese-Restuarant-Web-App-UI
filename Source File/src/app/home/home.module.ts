import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalScrollMenuModule } from 'ngx-horizontal-scroll-menu';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatMenu } from '@angular/material/menu';
import { MatMenuItem } from '@angular/material/menu';
import { MatMenuTrigger } from '@angular/material/menu';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HorizontalScrollMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
})
export class HomeModule { }
