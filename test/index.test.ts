import { hasUber } from '../source'

test('check uber country availability', async () => {
  const result = await hasUber('brazil')
  expect(result).toBe(true)
})

test('check uber city availability', async () => {
  const result = await hasUber('brazil', 'Sao Paulo')
  expect(result).toBe(true)
})

test('check unavailable country', async () => {
  const result = await hasUber('brasilzao')
  expect(result).toBe(false)
})

test('check unavailable city', async () => {
  const result = await hasUber('brazil', 'new york')
  expect(result).toBe(false)
})
