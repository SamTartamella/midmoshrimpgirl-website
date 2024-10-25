import { TestBed } from '@angular/core/testing';

import { GetCurrentShoppingCartService } from './get-current-shopping-cart';

describe('GetCurrentShoppingCartService', () => {
  let service: GetCurrentShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCurrentShoppingCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
