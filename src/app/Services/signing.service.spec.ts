/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SigningService } from './signing.service';

describe('Service: Signing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SigningService]
    });
  });

  it('should ...', inject([SigningService], (service: SigningService) => {
    expect(service).toBeTruthy();
  }));
});
