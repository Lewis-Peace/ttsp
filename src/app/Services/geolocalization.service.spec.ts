/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeolocalizationService } from './geolocalization.service';

describe('Service: Geolocalization', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeolocalizationService]
    });
  });

  it('should ...', inject([GeolocalizationService], (service: GeolocalizationService) => {
    expect(service).toBeTruthy();
  }));
});
