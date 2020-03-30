import { TestBed } from '@angular/core/testing';

import { PoemService } from './poem.service';

describe('PoemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoemService = TestBed.get(PoemService);
    expect(service).toBeTruthy();
  });

  it('should get a poem', () => {
    const service: PoemService = TestBed.get(PoemService);
    const poem = service.getPoem();
    expect(poem.title).toBeDefined();
    expect(poem.body).toBeDefined();
    expect(poem.author).toBeDefined();
  });
});
