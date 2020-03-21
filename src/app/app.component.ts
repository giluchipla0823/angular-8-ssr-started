import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Router, Event, NavigationEnd, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';

declare var gtag: any;

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
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.getDataRoute().subscribe(data => {
      const title: string = `ANGULAR SSR - ${data.title}`;

      this.appTitle.setTitle(title);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: title
      };

      this.appMeta.updateTag(metaTag);
    });

    if (isPlatformBrowser(this.platformId)) {
      this.googleAnalyticsListener();
    }
  }

  getDataRoute() {
    return this.router.events
      .pipe(
        filter((event: Event) => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map(response => response.snapshot.data )
      );
  }

  googleAnalyticsListener(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        console.log('call googleAnalyticsListener');
        gtag('config', 'UA-161414129-1', {
          page_path: event.urlAfterRedirects
        });
      });
  }
}
