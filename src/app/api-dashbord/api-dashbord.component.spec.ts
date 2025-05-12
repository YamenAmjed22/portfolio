import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIDashbordComponent } from './api-dashbord.component';

describe('APIDashbordComponent', () => {
  let component: APIDashbordComponent;
  let fixture: ComponentFixture<APIDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APIDashbordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
