import { Component } from '@angular/core';
import { ProjectsComponent } from "../projects/projects.component";
import { HeroComponent } from "../hero/hero.component";
import { ContactComponent } from "../contact/contact.component";
import { SkillsComponent } from "../skills/skills.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [ProjectsComponent, HeroComponent, ContactComponent, SkillsComponent , FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
