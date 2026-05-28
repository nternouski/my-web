import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECH_STACK, PROJECTS } from '../../core/data/portfolio.data';
import { TechItem, Project } from '../../core/models/portfolio.models';

interface Language {
  name: string;
  level: string;
  stars: number;
}

@Component({
  selector: 'app-technical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss'],
})
export class TechnicalComponent {
  readonly techStack: TechItem[][] = TECH_STACK;
  readonly projects: Project[] = PROJECTS.filter((p) => p.branch === 'technical').sort(
    (a, b) => b.year - a.year,
  );

  readonly languages: Language[] = [
    { name: 'Spanish', level: 'Native', stars: 5 },
    { name: 'English', level: 'B2', stars: 4 },
    { name: 'Portuguese', level: 'A1', stars: 2 },
  ];

  starsArray(n: number): number[] {
    return Array.from({ length: 5 }, (_, i) => (i < n ? 1 : 0));
  }
}
