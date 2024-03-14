/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalVariablesService } from './global-variables.service';

describe('Service: GlobalVariables', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalVariablesService]
    });
  });

  it('should ...', inject([GlobalVariablesService], (service: GlobalVariablesService) => {
    expect(service).toBeTruthy();
  }));
});
