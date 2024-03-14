/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilesystemService } from './filesystem.service';

describe('Service: Filesystem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilesystemService]
    });
  });

  it('should ...', inject([FilesystemService], (service: FilesystemService) => {
    expect(service).toBeTruthy();
  }));
});
