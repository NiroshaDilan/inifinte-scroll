import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacttiveFormComponent } from './reacttive-form.component';

describe('ReacttiveFormComponent', () => {
  let component: ReacttiveFormComponent;
  let fixture: ComponentFixture<ReacttiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReacttiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacttiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
