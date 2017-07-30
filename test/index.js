'use strict'

const fs = require('fs')
const expect = require('expect.js')

const FileOlderThan = require('../index')

function wait(ms)
{
    const start = Date.now()
    let now = start
    while (now - start < ms)
    {
        now = Date.now()
    }
}

describe('File Older Than tests', () =>
{
    it('checks if non-existent file is older than 1 hour', () =>
    {
        expect(FileOlderThan('test/no-file', '1h')).to.be(true)
    })
    it('creates file, waits 1 second, checks if it is older than 1 second', () =>
    {
        fs.openSync('test/test-file', 'w')
        wait(1000)
        expect(FileOlderThan('test/test-file', '1s')).to.be(true)
    })
    it('creates file, checks if it is older than 1 minute', () =>
    {
        fs.openSync('test/test-file', 'w')
        expect(FileOlderThan('test/test-file', '1m')).to.be(false)
    })
})