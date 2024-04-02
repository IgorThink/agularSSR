import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BrowserApiService {
  private _isBrowser = isPlatformBrowser(this.platformId);
  private _isServer = isPlatformServer(this.platformId);

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  isBrowser(): boolean {
    return this._isBrowser;
  }

  isServer(): boolean {
    return this._isServer;
  }
}
