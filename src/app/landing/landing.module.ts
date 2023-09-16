import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingGalleryComponent } from './landing-gallery/landing-gallery.component';
import { HeroComponent } from './hero/hero.component';
import { HeroAdvantagesComponent } from './hero/hero-advantages/hero-advantages.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LandingGalleryComponent,
    HeroComponent,
    HeroAdvantagesComponent,
  ],
  exports: [LandingGalleryComponent, HeroComponent],
  imports: [CommonModule, SharedModule],
})
export class LandingModule {}
