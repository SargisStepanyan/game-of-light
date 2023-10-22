var side = 400;
var socket = io()


socket.on("matrix", handleMatrix)

function setup() {
       createCanvas(side,side);
       background('#acacac');
}

function handleMatrix(matrix) {
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
            rect(x * side/matrix.length, y * side/matrix.length, side/matrix.length, side/matrix.length,);
        }
    }
    console.log(matrix);
    
}