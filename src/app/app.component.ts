import { Component } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Router, Event, NavigationEnd, NavigationStart, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-8-ssr';

  constructor(
    private router: Router,
    private appTitle: Title,
    private appMeta: Meta,
  ) {
    this.getDataRoute().subscribe(data => {
      const appTitle: string = `ANGULAR SSR - ${data.title}`;

      this.appTitle.setTitle(appTitle);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: appTitle
      };

      this.appMeta.updateTag(metaTag);
    });
  }

  getDataRoute() {
    return this.router.events
      .pipe(
        filter((event: Event) => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map(response => response.snapshot.data )
      );
  }
}
