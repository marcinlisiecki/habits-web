import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { HeroComponent } from './hero/hero.component';
import { HeroAdvantagesComponent } from './hero/hero-advantages/hero-advantages.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturesComponent } from './features/features.component';
import { DownloadComponent } from './download/download.component';

@NgModule({
  declarations: [
    GalleryComponent,
    HeroComponent,
    HeroAdvantagesComponent,
    FeaturesComponent,
    DownloadComponent,
  ],
  exports: [
    GalleryComponent,
    HeroComponent,
    FeaturesComponent,
    DownloadComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class LandingModule {}
