import { TestBed } from '@angular/core/testing';

import { postsService } from './post.service';

describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: postsService = TestBed.get(postsService);
    expect(service).toBeTruthy();
  });
});
