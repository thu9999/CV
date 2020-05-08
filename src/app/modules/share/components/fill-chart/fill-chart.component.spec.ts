import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillChartComponent } from './fill-chart.component';

describe('FillChartComponent', () => {
  let component: FillChartComponent;
  let fixture: ComponentFixture<FillChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
