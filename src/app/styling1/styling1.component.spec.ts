import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Styling1Component } from './styling1.component';

describe('Styling1Component', () => {
  let component: Styling1Component;
  let fixture: ComponentFixture<Styling1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Styling1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Styling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
