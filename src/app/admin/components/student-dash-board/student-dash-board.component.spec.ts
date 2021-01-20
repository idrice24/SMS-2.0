import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StidentDashBoardComponent } from './stident-dash-board.component';

describe('StidentDashBoardComponent', () => {
  let component: StidentDashBoardComponent;
  let fixture: ComponentFixture<StidentDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StidentDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StidentDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
