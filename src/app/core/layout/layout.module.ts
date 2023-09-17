import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@core/layout/header/header.component';
import { RouterLink } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { FooterComponent } from '@core/layout/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterLink, SharedModule],
})
export class LayoutModule {}
