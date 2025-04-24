import { Component } from '@angular/core';
import { SKILLS } from '../../data/skills';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = SKILLS;
}
