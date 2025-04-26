import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [
    CommonModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  someInfo = {
    WelcomMessge: "Hi, I'm Yamen Amjed",
    mySkills: "Front-End Developer | Java Developer | Problem Solver",
    buttonData: "See My Work"
  }

  theImgSrc = "https://avatars.githubusercontent.com/u/165961256?v=4";

  constructor(
  ) { }

  goToPdf() {
    window.open('http://localhost:4000/assets/yamen-cv.pdf', '_blank')
  }

  isVisible = false;

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 100); // starts the whole animation
  }


}
