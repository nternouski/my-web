import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mauna-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollButtonComponent {
  public buttonBotton = new BehaviorSubject<number>(-5);

  @HostListener('window:scroll')
  public onScrollEvent() {
    this.buttonBotton.next(window.pageYOffset > 200 ? 2 : -5);
  }

  public scrollTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
