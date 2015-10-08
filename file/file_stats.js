/**
 * Created by oneleaf on 15/9/30.
 */
var fs = require("fs");
fs.stat("file_stats.js", function (err, stats) {
    if (err) {
    } else {
        console.log(JSON.stringify(stats));
        console.log("isFile:", stats.isFile());
        console.log("isDirectory:", stats.isDirectory());
        console.log("isSocket:", stats.isSocket());
    }
});