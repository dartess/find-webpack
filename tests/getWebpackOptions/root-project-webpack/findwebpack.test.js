const { test } = require('uvu');
const assert = require('uvu/assert');
const { getWebpackOptions } = require('../../../src/index');

test('getWebpackOptions / tryRootProjectWebpack', () => {
    assert.ok(getWebpackOptions());
});

test.run();