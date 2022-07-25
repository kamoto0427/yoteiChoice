import { TestBed } from '@angular/core/testing';

import { YoteiChoiceService } from './yotei-choice.service';

describe('YoteiChoiceService', () => {
  let service: YoteiChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoteiChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
