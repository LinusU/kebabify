'use strict'

var kebabify = require('.')
var assert = require('assert')

assert.equal(kebabify('test'), 'test')
assert.equal(kebabify('TEST'), 'test')

assert.equal(kebabify('testString'), 'test-string')
assert.equal(kebabify('TestString'), 'test-string')
assert.equal(kebabify('TEstString'), 'test-string')
assert.equal(kebabify('TestSTRing'), 'test-string')
assert.equal(kebabify('TEStSTRINg'), 'test-string')
assert.equal(kebabify('TEStSTRING'), 'test-string')

assert.equal(kebabify('test1'), 'test-1')
assert.equal(kebabify('test12'), 'test-12')
assert.equal(kebabify('test123'), 'test-123')

assert.equal(kebabify('T1E2S3T4'), 't1-e2-s3-t4')

assert.equal(kebabify('testString1'), 'test-string-1')
assert.equal(kebabify('testString12'), 'test-string-12')
assert.equal(kebabify('testString123'), 'test-string-123')
assert.equal(kebabify('test1String123'), 'test-1-string-123')
assert.equal(kebabify('test12String123'), 'test-12-string-123')

assert.equal(kebabify('åääåääåää'), 'åääåääåää')
assert.equal(kebabify('ÅääÅÖÖÅää'), 'åää-åööåää')
assert.equal(kebabify('ÅÄÄÅääÅää'), 'åääåää-åää')
assert.equal(kebabify('ÅääÅääÅää'), 'åää-åää-åää')
assert.equal(kebabify('ÅäÄÅäÄÅäÄ'), 'åä-äåä-äåä-ä')
