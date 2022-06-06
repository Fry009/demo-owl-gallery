import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicOwlComponent } from './dinamic-owl.component';

describe('DinamicOwlComponent', () => {
  let component: DinamicOwlComponent;
  let fixture: ComponentFixture<DinamicOwlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinamicOwlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicOwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
