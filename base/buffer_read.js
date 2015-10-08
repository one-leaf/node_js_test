/**
 * Created by oneleaf on 15/9/29.
 */
buf=new Buffer("中文测试","utf8");
console.log(buf.toString())
var StringDecoder = require("string_decoder").StringDecoder;
var decoder=new StringDecoder("utf8");
console.log(decoder.write(buf));
