## file-older-than.js
node.js: checks if a file modify date is older than a duration (useful for cache checks)

## Code Example

    const FileOlderThan = require('file-older-than')

    if (FileOlderThan('test-file', '1h5m'))
    {
        console.log('File is older than 1 hour, 5 minutes')
    }
    else
    {
        console.log('File is younger than 1 hour, 5 minutes')
    }

## Installation

    npm i file-older-than

# API Reference

    /**
    * returns whether a file is older than a certain duration
    * @param {string} filename
    * @param {string} duration - see https://github.com/icholy/Duration.js (e.g., '5m', '20w', '300d30h10m5s')
    * @return {boolean} true = file is older than the duration OR file does not exist
    */
    function FileOlderThan(file, duration)

## Tests

    npm install
    npm run test

* * *

Copyright (c) 2017 YOPEY YOPEY LLC - MIT License