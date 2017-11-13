const assert = require('assert')
const trimSignature = require('../lib/emailParser').trimSignature

describe('.trimSignature()', function trimSignatureTest() {
  it('Should return original value if signature is not present', function noSignature() {
    const emailBody = 'An email with no signature'
    assert.equal(trimSignature(emailBody), emailBody)
  })
})
