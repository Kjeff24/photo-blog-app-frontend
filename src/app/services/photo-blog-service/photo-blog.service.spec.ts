import { TestBed } from '@angular/core/testing';

import { PhotoBlogService } from './photo-blog.service';

describe('PhotoBlogService', () => {
  let service: PhotoBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
