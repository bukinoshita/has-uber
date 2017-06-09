'use strict'

import test from 'ava'
import hasUber from './../'

test('should return available city', async t => {
  const res = await hasUber('toronto').then(res => res[0])

  t.truthy(res)
})

test('should return not available city', async t => {
  const res = await hasUber('opsaa').then(res => res[0])

  t.falsy(res)
})
