'use strict';

import * as fs from 'node:fs/promises';

// console.log(process.argv);

const content = await fs.readFile(process.argv[2]);

console.dir(content); // Buffer

console.log(content + ''); // default: buffer.toString('utf8', 0, buffer.length)
