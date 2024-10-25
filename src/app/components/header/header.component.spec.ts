import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let routeSpy: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    routeSpy = jasmine.createSpyObj("ActivatedRoute", [], {url: of([{path: 'mock-url'}])});

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [{provide: ActivatedRoute, useValue: routeSpy}]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
