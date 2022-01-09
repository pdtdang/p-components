import { TestBed } from '@angular/core/testing';

import { PButtonService } from './p-button.service';

describe('PButtonService', () => {
  let service: PButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
