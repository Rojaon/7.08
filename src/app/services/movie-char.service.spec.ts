import { TestBed } from '@angular/core/testing';

import { MovieCharService } from './movie-char.service';

describe('MovieCharService', () => {
  let service: MovieCharService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieCharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
