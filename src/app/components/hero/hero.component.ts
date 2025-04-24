import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  someInfo={
    WelcomMessge:"Hi, I'm Yamen Amjed",
    mySkills:"Front-End Developer | Java Developer | Problem Solver",
    buttonData:"See My Work"
  }

  theImgSrc = "https://avatars.githubusercontent.com/u/165961256?v=4";

}
