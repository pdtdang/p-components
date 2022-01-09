import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDialogComponent } from './p-dialog.component';

describe('PDialogComponent', () => {
  let component: PDialogComponent;
  let fixture: ComponentFixture<PDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
