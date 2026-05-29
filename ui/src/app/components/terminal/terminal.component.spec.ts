import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { signal } from '@angular/core';
import { vi } from 'vitest';
import { TerminalComponent } from './terminal.component';
import { BranchStateService } from '../../core/services/branch-state.service';

describe('TerminalComponent', () => {
  let component: TerminalComponent;
  let branchSpy: {
    checkout: ReturnType<typeof vi.fn>;
    activeBranch: ReturnType<typeof signal<'main' | 'visual' | 'technical'>>;
  };

  beforeEach(() => {
    branchSpy = {
      checkout: vi.fn(),
      activeBranch: signal<'main' | 'visual' | 'technical'>('main'),
    };

    TestBed.configureTestingModule({
      imports: [TerminalComponent],
      providers: [{ provide: BranchStateService, useValue: branchSpy }, provideRouter([])],
    });

    const fixture = TestBed.createComponent(TerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('git checkout visual calls checkout and logs success', () => {
    component.currentInput = 'git checkout visual';
    component.onSubmit();
    expect(branchSpy.checkout).toHaveBeenCalledWith('visual');
    expect(component.history()[0].output).toBe("Switched to branch 'visual'");
  });

  it('git checkout unknown-branch returns error, does not call checkout', () => {
    component.currentInput = 'git checkout unknownbranch';
    component.onSubmit();
    expect(branchSpy.checkout).not.toHaveBeenCalled();
    expect(component.history()[0].output).toContain('did not match any branch');
  });

  it('git branch lists branches with active marker on main', () => {
    component.currentInput = 'git branch';
    component.onSubmit();
    const output = component.history()[0].output;
    expect(output).toContain('* main');
    expect(output).toContain('  visual');
    expect(output).toContain('  technical');
  });

  it('help returns list of available commands', () => {
    component.currentInput = 'help';
    component.onSubmit();
    expect(component.history()[0].output).toContain('git checkout');
    expect(component.history()[0].output).toContain('git branch');
  });

  it('empty input does not add history entry', () => {
    component.currentInput = '   ';
    component.onSubmit();
    expect(component.history().length).toBe(0);
  });

  it('unknown command returns usage error', () => {
    component.currentInput = 'ls -la';
    component.onSubmit();
    expect(component.history()[0].output).toContain('not a git command');
  });
});
