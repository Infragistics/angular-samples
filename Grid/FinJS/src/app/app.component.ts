import { Component, HostBinding, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme = false;

  public onChangeTheme(theme) {
    this.theme = theme;
  }
}
