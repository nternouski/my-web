import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BranchStateService } from '../../core/services/branch-state.service';
import { Branch, TerminalEntry } from '../../core/models/portfolio.models';

const VALID_BRANCHES: Branch[] = ['main', 'visual', 'technical'];

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent {
  readonly branchState = inject(BranchStateService);
  readonly isCollapsed = signal(false);
  readonly history = signal<TerminalEntry[]>([]);
  currentInput = '';

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef<HTMLDivElement>;

  private readonly checkoutCounts = new Map<Branch, number>(VALID_BRANCHES.map((b) => [b, 0]));

  private leastVisited(exclude: Branch): Branch {
    return VALID_BRANCHES.filter((b) => b !== exclude).reduce((a, b) =>
      (this.checkoutCounts.get(a) ?? 0) <= (this.checkoutCounts.get(b) ?? 0) ? a : b,
    );
  }

  toggleCollapse(): void {
    this.isCollapsed.update((v) => !v);
  }

  onTab(event: Event): void {
    event.preventDefault();
    const input = this.currentInput.trim();
    const active = this.branchState.activeBranch();

    if (!input) {
      this.currentInput = 'git';
    } else if (input === 'git') {
      this.currentInput = 'git checkout';
    } else if (input === 'git checkout') {
      this.currentInput = `git checkout ${this.leastVisited(active)}`;
    }
  }

  onSubmit(): void {
    const raw = this.currentInput.trim();
    if (!raw) return;
    const output = this.parseCommand(raw);
    this.history.update((entries) => [...entries, { input: raw, output, timestamp: new Date() }]);
    this.currentInput = '';
    setTimeout(() => {
      const el = this.scrollContainer?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }

  parseCommand(input: string): string {
    const parts = input.trim().split(/\s+/);

    if (parts[0] === 'help') {
      return [
        'Available commands:',
        '  git checkout <branch>  — switch to a branch',
        '  git branch             — list all branches',
      ].join('\n');
    }

    if (parts[0] === 'git' && parts[1] === 'branch' && !parts[2]) {
      const active = this.branchState.activeBranch();
      return VALID_BRANCHES.map((b) => (b === active ? `* ${b}` : `  ${b}`)).join('\n');
    }

    if (parts[0] === 'git' && parts[1] === 'checkout' && parts[2]) {
      const target = parts[2] as Branch;
      if (VALID_BRANCHES.includes(target)) {
        this.branchState.checkout(target);
        this.checkoutCounts.set(target, (this.checkoutCounts.get(target) ?? 0) + 1);
        return `Switched to branch '${target}'`;
      }
      return `error: pathspec '${parts[2]}' did not match any branch known to git.`;
    }

    return `git: '${input}' is not a git command. Type 'help' to see available commands.`;
  }
}
