import { formatNumber } from '../formatNumber';

describe('formatNumber', ()=>{
  const fn = formatNumber;
  test('should correctly format number to string by using commas', () => {
     expect(fn(10)).toBe('10')
     expect(fn(100)).toBe('100')
     expect(fn(1_000)).toBe('1,000')
     expect(fn(10_000)).toBe('10,000')
     expect(fn(1_000_000)).toBe('1,000,000')
     expect(fn(10_000_000)).toBe('10,000,000')
  })  
  test('should return empty string in edge cases', ()=>{
     expect(fn()).toBe('')
     expect(fn(null)).toBe('')
     expect(fn(NaN)).toBe('')
     expect(fn('str')).toBe('')
     expect(fn({})).toBe('')
  })
})