import { Component } from '@angular/core';
import { PALASTINE_CONTENT } from './palastine-history';

@Component({
  selector: 'app-palestine-history',
  imports: [],
  templateUrl: './palestine-history.component.html',
  styleUrl: './palestine-history.component.scss'
})
export class PalestineHistoryComponent {

  palastineContent: any = PALASTINE_CONTENT;
}
