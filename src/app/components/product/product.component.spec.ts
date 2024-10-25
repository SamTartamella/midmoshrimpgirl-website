import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let routeSpy: jasmine.SpyObj<ActivatedRoute>; 
  
  beforeEach(async () => {
    routeSpy = jasmine.createSpyObj("ActivatedRoute", [], {url: of([{path: 'mock-url'}]) });

    await TestBed.configureTestingModule({
      imports: [ProductComponent],
      providers: [{provide: ActivatedRoute, useValue: routeSpy}]
    }).compileComponents();

    
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fdescribe('addToCart()', () => {
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
      component.calculatePrice();
      component.addToCart();

      // Assert 
      expect(component.cart).toContain(expectedShoppingCartItem); 
    });
  });
});
