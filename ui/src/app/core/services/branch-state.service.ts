import { Injectable, Signal, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs/operators';
import { Branch } from '../models/portfolio.models';

const ROUTE_BRANCH_MAP: Record<string, Branch> = {
  '': 'main',
  visual: 'visual',
  technical: 'technical',
};

function urlToBranch(url: string): Branch {
  const path = url.replace(/^\//, '').split('?')[0].split('#')[0];
  return ROUTE_BRANCH_MAP[path] ?? 'main';
}

@Injectable({ providedIn: 'root' })
export class BranchStateService {
  private readonly router = inject(Router);

  readonly activeBranch: Signal<Branch> = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => urlToBranch(e.urlAfterRedirects)),
      startWith(urlToBranch(this.router.url)),
    ),
    { initialValue: 'main' as Branch },
  );

  checkout(branch: Branch): void {
    this.router.navigate([branch === 'main' ? '/' : `/${branch}`]);
  }
}
