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

  it('should call onIntervalEvent', () => {
    spyOn(component, 'onIntervalEvent');
    let data = 1;
    component.onIntervalEvent(data);
    expect(component.onIntervalEvent).toHaveBeenCalled();
  });
 
  it('should call onStartClick', () => {
    spyOn(component, 'onStartClick');
    let data = 1;
    component.onStartClick(data);
    expect(component.onStartClick).toHaveBeenCalled();
  });

  it('should call onPauseClick', () => {
    spyOn(component, 'onPauseClick');
    let data = 1;
    component.onPauseClick(data);
    expect(component.onPauseClick).toHaveBeenCalled();
  });

  it('should call onStartTime', () => {
    spyOn(component, 'onStartTime');
    let data = new Date();
    component.onStartTime(data);
    expect(component.onStartTime).toHaveBeenCalled();
  });

  it('should call onPausedTime', () => {
    spyOn(component, 'onPausedTime');
    let data = new Date();
    component.onPausedTime(data);
    expect(component.onPausedTime).toHaveBeenCalled();
  }); 
  
});
