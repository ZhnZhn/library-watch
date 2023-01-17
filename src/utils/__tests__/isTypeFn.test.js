import {
  isNumber,
  isArr,
  isRegularObj,
  isStr,
  isNotEmptyStr
} from '../isTypeFn';

describe('isNumber',()=>{
  const fn = isNumber;
  test('should return boolean is value type number',()=>{
    expect(fn(0.1+0.2)).toBe(true)

    expect(fn(NaN)).toBe(false)
    expect(fn()).toBe(false)
    expect(fn(null)).toBe(false)
    expect(fn('str')).toBe(false)
    expect(fn(true)).toBe(false)
    expect(fn({})).toBe(false)
    expect(fn([])).toBe(false)
    expect(fn(()=>{})).toBe(false)
  })
})

describe('isArr',()=>{
  const fn = isArr;
  test('should return boolean is value type array',()=>{
    expect(fn([])).toBe(true)

    expect(fn(1)).toBe(false)
    expect(fn(NaN)).toBe(false)
    expect(fn()).toBe(false)
    expect(fn(null)).toBe(false)
    expect(fn('str')).toBe(false)
    expect(fn(true)).toBe(false)
    expect(fn({})).toBe(false)
    expect(fn(()=>{})).toBe(false)
  })
})

describe('isRegularObj',()=>{
  const fn = isRegularObj;
  test('should return boolean is value type regular object',()=>{
    expect(fn({})).toBe(true)

    expect(fn(1)).toBe(false)
    expect(fn(NaN)).toBe(false)
    expect(fn()).toBe(false)
    expect(fn(null)).toBe(false)
    expect(fn('str')).toBe(false)
    expect(fn(true)).toBe(false)
    expect(fn([])).toBe(false)
    expect(fn(()=>{})).toBe(false)
  })
})

describe('isNotEmptyStr',()=>{
  const fn = isStr;
  test('shoult return true only for string type', ()=>{
    expect(fn('str')).toBe(true)
    expect(fn('')).toBe(true)

    expect(fn(new String())).toBe(false)
    expect(fn()).toBe(false)
    expect(fn(null)).toBe(false)
    expect(fn(0)).toBe(false)
    expect(fn(true)).toBe(false)
    expect(fn({})).toBe(false)
    expect(fn(()=>{})).toBe(false)
  })
})

describe('isNotEmptyStr',()=>{
  const fn = isNotEmptyStr;
  test('shoult return true only for not empty string parameter', ()=>{
    expect(fn('a')).toBe(true)
    expect(fn(' ')).toBe(true)

    expect(fn('')).toBe(false)
    expect(fn()).toBe(false)
    expect(fn(null)).toBe(false)
    expect(fn(0)).toBe(false)
    expect(fn(true)).toBe(false)
    expect(fn({})).toBe(false)
    expect(fn(()=>{})).toBe(false)
  })
})
