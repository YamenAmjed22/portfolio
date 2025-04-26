import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  isContactVisible = false;

  ngOnInit() {
    setTimeout(() => {
      this.isContactVisible = true;
    }, 200); // Adjust as needed
  }

}
