import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Router } from '@angular/router';
import { vi } from 'vitest';
import { BranchStateService } from './branch-state.service';

describe('BranchStateService', () => {
  let service: BranchStateService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });
    service = TestBed.inject(BranchStateService);
    router = TestBed.inject(Router);
  });

  it('activeBranch defaults to main', () => {
    expect(service.activeBranch()).toBe('main');
  });

  it('checkout(visual) navigates to /visual', () => {
    const spy = vi.spyOn(router, 'navigate');
    service.checkout('visual');
    expect(spy).toHaveBeenCalledWith(['/visual']);
  });

  it('checkout(technical) navigates to /technical', () => {
    const spy = vi.spyOn(router, 'navigate');
    service.checkout('technical');
    expect(spy).toHaveBeenCalledWith(['/technical']);
  });

  it('checkout(main) navigates to /', () => {
    const spy = vi.spyOn(router, 'navigate');
    service.checkout('main');
    expect(spy).toHaveBeenCalledWith(['/']);
  });
});
