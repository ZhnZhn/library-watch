import {
  isYmd,
  mlsToDmy,
  mlsToYmd,
  subtractMonths,
  ymdToMlsUTC,
  ymdToUTCSecond,
  isWeekend
} from '../dateFn';

import dateFnWithMock from './dateFnWithMock';

const MIN_YEAR = 1999;

describe('isYmd',()=>{
  const fn = isYmd;
  test('should return true for valid YYYY-MM-DD', ()=> {
    expect(fn("2010-01-10")).toBe(true)
    expect(fn("2010-10-01")).toBe(true)
  })
  test('should return false for not valid YYYY-MM-DD', ()=> {
    expect(fn("2010-14-01")).toBe(false)
    expect(fn("2010-02-32")).toBe(false)
  })
  test(`min default valid value is ${MIN_YEAR}-01-01`, () => {
    expect(fn(`${MIN_YEAR}-01-01`)).toBe(true)
    expect(fn('1989-12-30')).toBe(false)
  })
  test('min default valid can be configured', () => {
    expect(fn('1989-12-30', 0, 1989)).toBe(true)
  })
  test('should year be not future', () => {
    expect(fn('2030-01-01')).toBe(false)

    expect(fn('2030-01-01', 1)).toBe(false)
    expect(fn('2030-01-01', 2)).toBe(false)
    expect(fn('2030-01-01', 3)).toBe(false)
    expect(fn('2030-01-01', 20)).toBe(true)
  })
  test('should return false in edge case', () => {
     expect(fn('')).toBe(false)
     expect(fn([])).toBe(false)
     expect(fn(null)).toBe(false)
     expect(fn(undefined)).toBe(false)
  })
})

describe('mlsToDmy',()=>{
  const fn = mlsToDmy;
  const EMPTY = '';
  test('should format mlsUTC to DD-MM-YYYY string format',()=>{
    expect(fn(1514764800000)).toBe('01-01-2018')
    expect(fn(1515542400000)).toBe('10-01-2018')
    expect(fn(1538352000000)).toBe('01-10-2018')
  })
  test('should format to empty string in edge case', ()=>{
    expect(fn(null)).toBe(EMPTY)
    expect(fn(undefined)).toBe(EMPTY)
    expect(fn({})).toBe(EMPTY)
    expect(fn(NaN)).toBe(EMPTY)
    expect(fn('')).toBe(EMPTY)
    expect(fn('abc')).toBe(EMPTY)
    expect(fn(()=>{})).toBe(EMPTY)
    expect(fn(Number.MAX_SAFE_INTEGER)).toBe(EMPTY)
  })
})

describe('mlsToYmd',()=>{
  const fn = mlsToYmd;
  const EMPTY = '';
  test('should format mlsUTC to YYYY-MM-DD string format',()=>{
    expect(fn(1514764800000)).toBe('2018-01-01')
    expect(fn(1515542400000)).toBe('2018-01-10')
    expect(fn(1538352000000)).toBe('2018-10-01')
  })
  test('should format to empty string in edge case', ()=>{
    expect(fn(null)).toBe(EMPTY)
    expect(fn(undefined)).toBe(EMPTY)
    expect(fn({})).toBe(EMPTY)
    expect(fn(NaN)).toBe(EMPTY)
    expect(fn('')).toBe(EMPTY)
    expect(fn('abc')).toBe(EMPTY)
    expect(fn(()=>{})).toBe(EMPTY)
    expect(fn(Number.MAX_SAFE_INTEGER)).toBe(EMPTY)
  })
})

describe('subtractMonths', ()=>{
  const fn = subtractMonths;
  test('should return string YYYY-MM-DD from date string and number of months', () => {
    expect(fn('2010-01-31', 1)).toBe('2009-12-31')
    expect(fn('2010-03-31', 1)).toBe('2010-02-28')
    expect(fn('2012-03-31', 1)).toBe('2012-02-29')
    expect(fn('2010-05-31', 1)).toBe('2010-04-30')
    expect(fn('2010-06-30', 1)).toBe('2010-05-31')

    expect(fn('2010-01-30', 1)).toBe('2009-12-30')
    expect(fn('2010-03-30', 1)).toBe('2010-02-28')
    expect(fn('2012-03-30', 1)).toBe('2012-02-29')
    expect(fn('2010-05-30', 1)).toBe('2010-04-30')
    expect(fn('2010-06-29', 1)).toBe('2010-05-29')

    expect(fn('2010-01-01', 1)).toBe('2009-12-01')
    expect(fn('2010-03-02', 1)).toBe('2010-02-02')
    expect(fn('2010-05-03', 1)).toBe('2010-04-03')
    expect(fn('2010-06-04', 1)).toBe('2010-05-04')

    expect(fn('2010-06-30', 2)).toBe('2010-04-30')
    expect(fn('2010-06-30', 6)).toBe('2009-12-31')
    expect(fn('2010-06-30', 12)).toBe('2009-06-30')
    expect(fn('2010-06-30', 18)).toBe('2008-12-31')
    expect(fn('2010-06-30', 24)).toBe('2008-06-30')
  })
})

describe('ymdToMlsUTC',()=>{
  const fn = ymdToMlsUTC;
  test('should return mlsUTC from YYYY-MM-DD string',()=>{
    expect(fn('2018-01-01')).toBe(1514764800000)
    expect(fn('2018-01-10')).toBe(1515542400000)
    expect(fn('2018-10-01')).toBe(1538352000000)
  })
  test('should return NaN in edge cases',()=>{
    expect(fn('')).toBe(NaN)
    expect(fn('abc')).toBe(NaN)
    expect(fn()).toBe(NaN)
    expect(fn(void 0)).toBe(NaN)
    expect(fn(1)).toBe(NaN)
    expect(fn([])).toBe(NaN)
    expect(fn({})).toBe(NaN)
  })
})

describe('ymdToUTCSecond',()=>{
  const fn = ymdToUTCSecond;
  test('should return secondsUTC from YYYY-MM-DD string',()=>{
    expect(fn('2018-01-01')).toBe(1514764800)
    expect(fn('2018-01-10')).toBe(1515542400)
    expect(fn('2018-10-01')).toBe(1538352000)
  })
  test('should return NaN in edge cases',()=>{
    expect(fn('')).toBe(NaN)
    expect(fn('abc')).toBe(NaN)
    expect(fn()).toBe(NaN)
    expect(fn(void 0)).toBe(NaN)
    expect(fn(1)).toBe(NaN)
    expect(fn([])).toBe(NaN)
    expect(fn({})).toBe(NaN)
  })
})

describe('isWeekend',()=>{
  const fn = isWeekend;
  test('should return boolean is y,m,d is weekend',()=>{
    expect(fn(2018,10,6)).toBe(true)
    expect(fn('2018',10,7)).toBe(true)
    expect(fn(2018,10,'8')).toBe(false)
    expect(fn(2018,'10',9)).toBe(false)
    expect(fn(2018,10,10)).toBe(false)
    expect(fn(2018,10,11)).toBe(false)
    expect(fn(2018,10,12)).toBe(false)
  })
  test('should return false in edge cases',()=>{
    expect(fn()).toBe(false)
    expect(fn('abc','efg',{})).toBe(false)
    expect(fn(null,null,null)).toBe(false)
  })
})

dateFnWithMock()
