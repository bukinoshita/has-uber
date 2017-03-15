'use strict'

import test from 'ava'
import hasUber from './../'

test('should return available city', async t => {
  const res = await hasUber('toronto').then(res => res)

  t.truthy(res)
})

test('should return not available city', async t => {
  const res = await hasUber('opsaa').catch(err => err)

  t.falsy(res)
})
