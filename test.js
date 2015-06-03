var test = require('tape')

test('testing a bug', function(t) {
  t.equal(2, 2, 'yep')
  t.end()
  throw new Error("Should error out")
})