import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestineHistoryComponent } from './palestine-history.component';

describe('PalestineHistoryComponent', () => {
  let component: PalestineHistoryComponent;
  let fixture: ComponentFixture<PalestineHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalestineHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalestineHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
