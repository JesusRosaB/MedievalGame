/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuarterService } from './quarter.service';

describe('QuarterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuarterService]
    });
  });

  it('should ...', inject([QuarterService], (service: QuarterService) => {
    expect(service).toBeTruthy();
  }));
});
