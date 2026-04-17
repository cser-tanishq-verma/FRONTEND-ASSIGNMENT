import { TestBed } from '@angular/core/testing';

import { Math } from './math';

describe('Math', () => {
  let service: Math;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Math);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add 2 numbers',()=>{
    let res=service.add(4,2)
    expect(res).toEqual(6)
  });
  it('should sub 2 numbers',()=>{
    let res=service.sub(4,2)
    expect(res).toEqual(2)
  });
  it('should mult 2 numbers',()=>{
    let res=service.mult(4,2)
    expect(res).toEqual(8)
  });
  it('should div 2 numbers',()=>{
    let res=service.div(4,2)
    expect(res).toEqual(2)
  });
});
