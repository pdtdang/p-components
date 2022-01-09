import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PComponentsComponent } from './p-components.component';

describe('PComponentsComponent', () => {
  let component: PComponentsComponent;
  let fixture: ComponentFixture<PComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
