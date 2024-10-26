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

  describe('addToCart()', () => {
    it('should add current item to cart array', () => {
      // Arrange 
      let product = {
        productName: 'abc', 
        productPrice: 2, 
        productImagePath: '/assets/whiteshrimp.png'
      }

      let expectedShoppingCartItem = {
        product: product,
        quantity: 2,
        total: 4,
      }

      // Act 
      service.addToCart(expectedShoppingCartItem);

      // Assert 
      expect(service.currentShoppingCart.value).toContain(expectedShoppingCartItem); 
    });
  });

  describe('removeFromCart', () => {
    it('should remove selected item from shoppingCartItems array', () => {
      // Arrange
      let item = {
        product: {productName: 'mock item', productPrice: 2, productImagePath: 'mock.path'},
        quantity: 2, 
        total: 4
      }
      service.currentShoppingCart.value.push(item); 

      // Act 
      service.removeFromCart(item);

      // Assert
      expect(service.currentShoppingCart.value).toEqual([]);
    });
  });
});
