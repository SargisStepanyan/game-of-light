var matrix = [];
var side = 60;
var n = 12;
var m = 18;

for (let i = 0; i<n; i++) {
    matrix.push([])
    for (let j = 0; j<m; j++) {
        matrix[i].push(0)
    }
}

function characters(index,count) {
    for (let a = 0; a<count; a++) {
        var v = Math.floor(random(0,n))
        var w = Math.floor(random(0,m))
        matrix[v][w] = index
    }
}
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var bombArr = [];


function setup() {
    characters(1,30)
    characters(2,20)
    characters(3,3)
    characters(4,1)
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    var gr = new Grass(1, 2)
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



function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black")
            }
            rect(x * side, y * side, side, side,);
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    // for (var i in grassEaterArr) {
    //     grassEaterArr[i].eat();
    // }
    // for (var i in predatorArr) {
    //     predatorArr[i].eat();
    // }
    // setInterval(() => {
    //     for (var i in bombArr) {
    //         bombArr[i].boom()
    //     } 
    // }, 10000);

    
}


