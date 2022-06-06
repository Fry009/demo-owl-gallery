import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticOwlComponent } from './static-owl.component';

describe('StaticOwlComponent', () => {
  let component: StaticOwlComponent;
  let fixture: ComponentFixture<StaticOwlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticOwlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticOwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
