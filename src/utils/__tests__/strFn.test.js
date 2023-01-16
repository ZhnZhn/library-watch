import {
  isNotEmptyStr,
  setFirstToUpperCase
} from '../strFn';

describe('isNotEmptyStr',()=>{
  const fn = isNotEmptyStr
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

describe('setFirstToUpperCase',()=>{
  const fn = setFirstToUpperCase;
  test('return str with upperCase first letter',()=>{
    expect(fn('abc')).toBe('Abc')
  })
  test('return input in all edge cases',()=>{
    expect(fn('')).toBe('')

    expect(fn()).toBe()
    expect(fn(null)).toBe(null)
    expect(fn(1)).toBe(1)
    expect(fn(true)).toBe(true)

    const obj = {}
    expect(fn(obj) === obj).toBe(true)
    const fnInput = () => {}
    expect(fn(fnInput) === fnInput).toBe(true)
  })
})
