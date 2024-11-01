import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let routeSpy: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    routeSpy = jasmine.createSpyObj("ActivatedRoute", [], {url: of([{path: 'mock-url'}])});
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [{provide: ActivatedRoute, useValue: routeSpy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
