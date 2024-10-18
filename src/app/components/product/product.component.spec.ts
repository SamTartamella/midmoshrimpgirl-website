import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addToCart()', () => {
    it('should add current item to cart array', () => {
      // Arrange 
      component.product = {
        productName: 'abc', 
        productPrice: 2, 
        productImagePath: '/assets/whiteshrimp.png'
      }
      component.quantityCount = 2; 
      let expectedShoppingCartItem = {
        product: component.product,
        quantity: component.quantityCount,
        total: 4,
      }

      // Act 
      component.addToCart();

      // Assert 
      expect(component.cart).toContain(expectedShoppingCartItem); 
    });
  });
});
