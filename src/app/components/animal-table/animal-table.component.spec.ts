import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalTableComponent } from './animal-table.component';

describe('AnimalTableComponent', () => {
  let component: AnimalTableComponent;
  let fixture: ComponentFixture<AnimalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
