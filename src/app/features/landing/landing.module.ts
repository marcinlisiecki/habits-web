import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { GalleryComponent } from '@features/landing/gallery/gallery.component';
import { HeroComponent } from '@features/landing/hero/hero.component';
import { HeroAdvantagesComponent } from '@features/landing/hero/hero-advantages/hero-advantages.component';
import { SharedModule } from '@shared/shared.module';
import { FeaturesComponent } from '@features/landing/features/features.component';
import { DownloadComponent } from '@features/landing/download/download.component';
import { TranslateModule } from '@ngx-translate/core';

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
  imports: [CommonModule, SharedModule, NgOptimizedImage, TranslateModule],
})
export class LandingModule {}
