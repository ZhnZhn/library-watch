import {
  getFromDate,
  getToDate
} from '../dateFn';

import mockDateBeforeAll from './mockDateBeforeAll'

describe('dateFnWithMock', ()=>{
  test('', ()=>expect('').toBe(''))
})

const dateFnWithMock = () => {
  describe('getFromDate', ()=>{
    //2020-01-01 12:00:01
    mockDateBeforeAll(2020,0,1,12,0,1)

    test('getToDate should return current Date as YYYY-MM-DD', () => {
      expect(getToDate()).toBe('2020-01-01')
    })

    const fn = getFromDate;
    test('should return str in format YYYY-MM-DD minusYear', ()=> {
      expect(fn(2)).toBe('2018-01-01')
      expect(fn(void 0)).toBe('2018-01-01')
      expect(fn(20)).toBe('2000-01-01')
    })
  })
}

export default dateFnWithMock
