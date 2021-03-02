import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownSubjectComponent } from './count-down-subject.component';

describe('CountDownSubjectComponent', () => {
  let component: CountDownSubjectComponent;
  let fixture: ComponentFixture<CountDownSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
