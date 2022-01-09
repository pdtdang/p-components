import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMessagePopoverComponent } from './p-message-popover.component';

describe('PMessagePopoverComponent', () => {
  let component: PMessagePopoverComponent;
  let fixture: ComponentFixture<PMessagePopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMessagePopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PMessagePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
