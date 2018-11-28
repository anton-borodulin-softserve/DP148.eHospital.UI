import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPatientTableComponent } from './recent-patient-table.component';

describe('RecentPatientTableComponent', () => {
  let component: RecentPatientTableComponent;
  let fixture: ComponentFixture<RecentPatientTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentPatientTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPatientTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
