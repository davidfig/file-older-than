/**
 * @file file-older-than.js
 * @author David Figatner
 * @license MIT
 * @copyright YOPEY YOPEY LLC 2017
 * {@link https://github.com/davidfig/file-older-than}
 */

const fs = require('fs')
const Duration = require('duration-js')
const util = require('util')

/**
 * returns whether a file is older than a certain duration
 * @param {string} filename
 * @param {string} duration - see https://github.com/icholy/Duration.js (e.g., '5m', '20w', '300d30h10m5s')
 * @return {boolean} true = file is older than the duration OR file does not exist
 */
module.exports = function (filename, duration)
{
    let stats
    try
    {
        stats = fs.statSync(filename)
    }
    catch (e)
    {
        return true
    }
    const fileDate = new Date(util.inspect(stats.mtime))
    const parsed = Duration.parse(duration)
    return new Date() - parsed > fileDate
}