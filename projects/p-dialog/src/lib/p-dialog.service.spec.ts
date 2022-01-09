import { TestBed } from '@angular/core/testing';

import { PDialogService } from './p-dialog.service';

describe('PDialogService', () => {
  let service: PDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
