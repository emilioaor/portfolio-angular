import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  scrollTop: Number;

  onScroll(event: any): void {
      this.scrollTop = event.target.scrollTop;
  }
}
