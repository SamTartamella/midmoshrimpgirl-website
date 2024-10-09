import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedCherryProductComponent } from './red-cherry-product.component';

describe('RedCherryProductComponent', () => {
  let component: RedCherryProductComponent;
  let fixture: ComponentFixture<RedCherryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedCherryProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedCherryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
