import { TestBed } from '@angular/core/testing';

import { PMessagePopoverService } from './p-message-popover.service';

describe('PMessagePopoverService', () => {
  let service: PMessagePopoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PMessagePopoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
