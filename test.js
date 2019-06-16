// Packages
import test from 'ava'

// Root
import m from '.'

test('it should return available city', async t => {
  const result = await m('toronto')

  t.truthy(result)
})

test('it should return not available city', async t => {
  const result = await m('opsaa')

  t.falsy(result)
})

test('it should throw error', async t => {
  const error = await t.throwsAsync(() => m())

  t.is(error.message, 'Place is required')
})
