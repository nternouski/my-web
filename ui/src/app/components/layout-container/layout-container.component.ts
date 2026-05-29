import { Component, inject, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BranchStateService } from '../../core/services/branch-state.service';
import { TerminalComponent } from '../terminal/terminal.component';
import { Branch } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-layout-container',
  standalone: true,
  imports: [RouterOutlet, TerminalComponent],
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
})
export class LayoutContainerComponent {
  readonly branchState = inject(BranchStateService);
  readonly branches: Branch[] = ['main', 'technical', 'visual'];

  readonly branchClass = computed(() => `branch-${this.branchState.activeBranch()}`);

  readonly accentColor = computed((): string => {
    const b = this.branchState.activeBranch();
    if (b === 'main') return '#00e290';
    if (b === 'technical') return '#58a6ff';
    return '#a371f7';
  });

  nodeColor(branch: Branch): string {
    return this.branchState.activeBranch() === branch ? this.accentColor() : '#444748';
  }

  branchIcon(branch: Branch): string {
    if (branch === 'main') return 'home';
    if (branch === 'technical') return 'code';
    return 'brush';
  }
}
