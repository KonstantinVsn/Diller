import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-nav-bar class="fixed-top">
            </app-nav-bar>
            <router-outlet></router-outlet>
            <footer class="page-footer teal darken-3 fixed-bottom">
            </footer>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diller';
}
