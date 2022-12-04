import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Exact Equality //toBe
  it('two plus two is four', () => {
    expect(2+2).toBe(4);
  });

    //Exact Object //toEqual
    it('Object values', () => {
      const data = {name:"HelloWorld"};
      expect(data).toEqual({name:"HelloWorld"});
    });
  
    //Truthiness
    it('null', () => {
      const n = null;
      expect(n).toBeNull();
      expect(n).toBeDefined();
      expect(n).not.toBeUndefined();
      expect(n).not.toBeTruthy();
      expect(n).toBeFalsy();
    });

    it('zero', () => {
      const z = 0;
      expect(z).not.toBeNull();
      expect(z).toBeDefined();
      expect(z).not.toBeUndefined();
      expect(z).not.toBeTruthy();
      expect(z).toBeFalsy();
    });

    // floating
    it('adding floating point numbers', () => {
      const value = 0.1 +0.2;
      //expect(value).toBe(0.3); This won't work because of rounding error
      expect (value).toBeCloseTo(0.3); // This works.
      });

    // Strings
    it('there is no D in techops', () => {
    expect('techops').not.toMatch(/D/);
    });

    it('but there is a "world" in HelloWorld', () => {
    expect('HelloWorld').toMatch(/World/);
    });

    // Arrays and iterables
    it('the shopping list has milk on it', () => {
      const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'milk',
    ];
      expect (shoppingList).toContain('milk');
      expect (new Set (shoppingList)).toContain('milk');
    });

  // Exceptions
    it('compiling android goes as expected', () => {
      expect (() => component.compileExceptionCode()).toThrow();
      expect (() => component.compileExceptionCode()).toThrow(Error);
      // You can also use the exact error message or a regexp
      expect (() => component.compileExceptionCode()).toThrow('you are using Old Angular');
      expect (() => component.compileExceptionCode()).toThrow(/Angular/);
    });

});
