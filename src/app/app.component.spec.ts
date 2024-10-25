import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { routes } from './app.routes';

describe('AppComponent', () => {
  let routeSpy: jasmine.SpyObj<ActivatedRoute>; 

  beforeEach(async () => {
    routeSpy = jasmine.createSpyObj("ActivatedRoute", [], {url: of([{path: 'mock-url'}]) });
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{provide: ActivatedRoute, useValue: routeSpy}]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'midmoshrimpgirl-website' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('midmoshrimpgirl-website');
  });

});
