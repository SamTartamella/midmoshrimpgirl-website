import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarComponent } from './menu-bar.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';

describe('MenuBarComponent', () => {
  let component: MenuBarComponent;
  let fixture: ComponentFixture<MenuBarComponent>;
  let routeSpy: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    routeSpy = jasmine.createSpyObj("ActivatedRoute", [], {url: of([{path: 'mock-url'}]) });
    await TestBed.configureTestingModule({
      imports: [MenuBarComponent],
      providers: [{provide: ActivatedRoute, useValue: routeSpy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
