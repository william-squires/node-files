"use strict";

const fsP = require("fs/promises");

const FILE_NAME_INDEX = 2;
const TEXT_ENCODING_TYPE = "utf8";


/** Takes a file path and logs contents of the file to console.
 *  If the file path is invalid, exits and logs error message.
 */
async function cat(path) {
    try {
        const contents = await fsP.readFile(path, TEXT_ENCODING_TYPE);
        console.log(contents);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

if (process.argv[FILE_NAME_INDEX]) {
    cat(process.argv[FILE_NAME_INDEX]);
}