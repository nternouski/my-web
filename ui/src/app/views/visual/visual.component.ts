import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MULTIMEDIA_SKILLS, PROJECTS } from '../../core/data/portfolio.data';
import { SkillItem, Project } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-visual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss'],
})
export class VisualComponent {
  readonly skills: SkillItem[] = MULTIMEDIA_SKILLS;
  readonly projects: Project[] = PROJECTS.filter((p) => p.branch === 'visual').sort(
    (a, b) => b.year - a.year,
  );

  starsArray(n: number): number[] {
    return Array.from({ length: 5 }, (_, i) => (i < n ? 1 : 0));
  }
}
