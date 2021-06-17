import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpTestComponent } from './mvp-test.component';

describe('MvpTestComponent', () => {
  let component: MvpTestComponent;
  let fixture: ComponentFixture<MvpTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
