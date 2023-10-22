var express = require("express");
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("../client"));
app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

io.on('connection', function (socket) {
        socket.emit("matrix", matrix);
});


////////////////////

let random = require("./random");
Bomb = require('./bomb.js')
Predator = require('./predator.js')
GrassEater = require('./grassEater.js')
Grass = require('./class.js')

 matrix = [];
 side = 60;
 n = 12;
 m = 18;

 grassArr = [];
 grassEaterArr = [];
 predatorArr = [];
 bombArr = []

for (let i = 0; i<n; i++) {
    matrix.push([])
    for (let j = 0; j<m; j++) {
        matrix[i].push(0)
    }
}

function characters(index,count) {
    for (let a = 0; a<count; a++) {
        var v = Math.floor(random(n))
        var w = Math.floor(random(m))
        matrix[v][w] = index
    }
}

function createObj() {
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gr = new GrassEater(x, y, 1);
                grassEaterArr.push(gr);
            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 2);
                predatorArr.push(pre);
            }
            else if (matrix[y][x] == 4) {
                var bo = new Bomb(x, y, 3);
                bombArr.push(bo);
            }
        }
    }
}

function start() {
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    setInterval(() => {
        for (var i in bombArr) {
            bombArr[i].boom()
        } 
    }, 10000);
}


    characters(1,30)
    characters(2,20)
    characters(3,3)
    characters(4,1)

    createObj()
    start()
    console.log(matrix);
    




