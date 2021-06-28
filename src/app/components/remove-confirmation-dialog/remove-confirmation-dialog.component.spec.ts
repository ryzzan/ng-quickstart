import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveConfirmationDialogComponent } from './remove-confirmation-dialog.component';

describe('RemoveConfirmationDialogComponent', () => {
  let component: RemoveConfirmationDialogComponent;
  let fixture: ComponentFixture<RemoveConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveConfirmationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
