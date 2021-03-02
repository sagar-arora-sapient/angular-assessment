import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownIOComponent } from './count-down-io.component';

describe('CountDownIOComponent', () => {
  let component: CountDownIOComponent;
  let fixture: ComponentFixture<CountDownIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownIOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
