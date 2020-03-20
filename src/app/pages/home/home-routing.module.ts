import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LazyLoadImageModule.forRoot(intersectionObserverPreset)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
