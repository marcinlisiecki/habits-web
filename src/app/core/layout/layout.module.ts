import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterLink, SharedModule],
})
export class LayoutModule {}
