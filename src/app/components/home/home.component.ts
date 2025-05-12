import { Component } from '@angular/core';
import { ProjectsComponent } from "../projects/projects.component";
import { HeroComponent } from "../hero/hero.component";
import { ContactComponent } from "../contact/contact.component";
import { SkillsComponent } from "../skills/skills.component";
@Component({
  selector: 'app-home',
  imports: [ProjectsComponent, HeroComponent, ContactComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
