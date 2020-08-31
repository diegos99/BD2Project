import { TestBed } from '@angular/core/testing';

import { RepueService } from './repue.service';

describe('RepueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepueService = TestBed.get(RepueService);
    expect(service).toBeTruthy();
  });
});
