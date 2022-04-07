import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroscrudsComponent } from './cuadroscruds.component';

describe('CuadroscrudsComponent', () => {
  let component: CuadroscrudsComponent;
  let fixture: ComponentFixture<CuadroscrudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroscrudsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroscrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
