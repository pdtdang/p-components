import { TestBed } from '@angular/core/testing';

import { PComponentsService } from './p-components.service';

describe('PComponentsService', () => {
  let service: PComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
