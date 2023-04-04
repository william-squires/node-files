"use strict";
/** Takes either a file or url and logs the contents to console if possible.
 *  Flags
 *  -f for files
 *  -u for urls
 *  ex: 
 *  node step2.js -f somefile.txt
 *  node step2.js -u http://someURL.com
 */

const fsP = require("fs/promises");
const axios = require("axios");

const TEXT_ENCODING_TYPE = "utf8";
const FILE_FLAG = "-f"
const URL_FLAG = "-u"


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

/** Takes a url and logs the content of that url to console.
 *  If there is an error getting that url, exits and logs error message.
 */
async function webCat(url) {
    try {
        const contents = await axios.get(url);
        console.log(contents);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

if (process.argv.indexOf(FILE_FLAG) !== -1) {
    cat(process.argv[process.argv.indexOf(FILE_FLAG) + 1]);
}
else if (process.argv.indexOf(URL_FLAG) !== -1) {
    webCat(process.argv[process.argv.indexOf(URL_FLAG) + 1]);
}
else {
    console.log("Error: no valid flag found");
    process.exit(1);
}