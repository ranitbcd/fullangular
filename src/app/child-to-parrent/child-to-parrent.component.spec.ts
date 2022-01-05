import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParrentComponent } from './child-to-parrent.component';

describe('ChildToParrentComponent', () => {
  let component: ChildToParrentComponent;
  let fixture: ComponentFixture<ChildToParrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildToParrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToParrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
