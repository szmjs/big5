import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerRadiosComponent } from './answer-radios.component';

describe('AnswerRadiosComponent', () => {
  let component: AnswerRadiosComponent;
  let fixture: ComponentFixture<AnswerRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerRadiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
