import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from './counter';
import { Counter as CounterService } from '../counter';

describe('Counter Component', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;
  let counterService: CounterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
      providers: [CounterService]
    }).compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    counterService = TestBed.inject(CounterService);
    await fixture.whenStable();
  });

  afterEach(() => {
    counterService.resetCount();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase the count when clicked', () => {
    expect(counterService.count).toBe(0);
    component.increment();
    expect(counterService.count).toBe(1);
  });

  it('should decrease the count when clicked', () => {
    component.increment();
    component.increment();
    expect(counterService.count).toBe(2);
    component.decrement();
    expect(counterService.count).toBe(1);
  });

  it('should reset the count when clicked', () => {
    component.increment();
    component.increment();
    component.increment();
    expect(counterService.count).toBe(3);
    component.reset();
    expect(counterService.count).toBe(0);
  });
});