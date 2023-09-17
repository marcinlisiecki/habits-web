import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isHeaderSmall: boolean = false;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => this.changeHeaderState());
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', () => this.changeHeaderState());
  }

  changeHeaderState(): void {
    if (!this.isHeaderSmall && window.scrollY > 0) {
      this.isHeaderSmall = true;
    } else if (this.isHeaderSmall && window.scrollY === 0) {
      this.isHeaderSmall = false;
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  activeLanguage(): string {
    return this.translate.currentLang;
  }
}
