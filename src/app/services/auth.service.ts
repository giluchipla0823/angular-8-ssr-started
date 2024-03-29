import { Injectable , PLATFORM_ID, Inject} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadStorage();
    }
  }

  login(): void {
    this.authenticated = true;
    this.saveStorage();
  }

  logout(): void {
    this.authenticated = false;
    this.removeStorage();
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  saveStorage(): void {
    sessionStorage.setItem('logged', 'true');
  }

  loadStorage(): void {
    if (sessionStorage.getItem('logged')) {
      this.authenticated = true;
    }
  }

  removeStorage(): void {
    sessionStorage.removeItem('logged');
  }
}
