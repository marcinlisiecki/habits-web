import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HeroComponent } from './hero/hero.component';
import { HeroAdvantagesComponent } from './hero/hero-advantages/hero-advantages.component';

@NgModule({
  declarations: [HeaderComponent, HeroComponent, HeroAdvantagesComponent],
  exports: [HeaderComponent, HeroComponent],
  imports: [CommonModule, RouterLink, SharedModule],
})
export class LayoutModule {}
