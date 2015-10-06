/**
 * Created by oneleaf on 2015/10/3.
 */
var net = require("net")
function getConnect(connName) {
    var client = net.connect({port: 8107, host: "localhost"}, function () {
        console.log(connName + " Connected:");
        console.log(" local = %s:%s", this.localAddress, this.localPort);
        console.log(" remote = %s:%s", this.remoteAddress, this.remotePort);
        this.setTimeout(500);
        this.setEncoding("UTF8");
        this.on("data", function (data) {
            console.log(connName + "Form Server: " + data.toString());
            this.end();
        })
        this.on("end", function () {
            console.log(connName + " Client discount");
        })
        this.on("error", function (err) {
            console.log("Socket Error" + JSON.stringify(err));
        })
        this.on("timeout", function () {
            console.log("Socket timeout");
        })
        this.on("close", function () {
            console.log("Socket Closed");
        })
    })
    return client;
}

function writeData(socket, data) {
    var success = !socket.write(data);
    if (!success) {
        (function (socket, data) {
            socket.once("drain", function () {
                writeData(socket, data);
            })
        })(socket, data);
    }

}

var Dwarves = getConnect("Dwarves");
var Elves = getConnect("Elves");
var Hobbits = getConnect("Hobbits");
writeData(Dwarves, "More Axes");
writeData(Elves, "Mire arrows");
writeData(Hobbits, "More pip weed");