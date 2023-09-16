import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [LogoComponent, ButtonComponent],
  exports: [LogoComponent, ButtonComponent],
  imports: [CommonModule, RouterLink],
})
export class SharedModule {}
