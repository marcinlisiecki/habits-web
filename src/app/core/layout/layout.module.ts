import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, RouterLink, SharedModule],
})
export class LayoutModule {}
