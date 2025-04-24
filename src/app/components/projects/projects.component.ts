import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = PROJECTS;
}
