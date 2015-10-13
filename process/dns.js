/**
 * Created by oneleaf on 2015/10/6.
 */
var dns=require("dns")
console.log("resolving qq.com ...");
dns.resolve("www.qq.com",function(err,addresses){
    console.log("IP Address:" + JSON.stringify(addresses, false, " "));
    addresses.forEach(function(addr){
        dns.reverse(addr,function(err,domains){
            if (err){
                console.log("Error:\t"+err.message);
            }else {
                console.log("Reverse for " + addr + " : " + JSON.stringify(domains));
            }
        })
    })
})