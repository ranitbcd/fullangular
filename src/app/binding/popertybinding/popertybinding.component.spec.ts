import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopertybindingComponent } from './popertybinding.component';

describe('PopertybindingComponent', () => {
  let component: PopertybindingComponent;
  let fixture: ComponentFixture<PopertybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopertybindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopertybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
