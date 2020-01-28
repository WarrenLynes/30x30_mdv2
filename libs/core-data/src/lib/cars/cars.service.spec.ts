import { TestBed } from '@angular/core/testing';

import { CarsService } from './projects.service';

describe('ProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsService = TestBed.get(CarsService);
    expect(service).toBeTruthy();
  });
});
