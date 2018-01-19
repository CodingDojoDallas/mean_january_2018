canvas = [
    [0, 8, 4, 0],
    [4, 4, 4, 4],
    [4, 8, 4, 8, 8, 4],
    [0, 4, 4, 0, 4],
    [0, 4, 4, 4, 0, 4],
    [0, 4, 4, 4, 4, 4],
]

var floodFill = function(canvas, startXY, newColor) {
    var x       = startXY[0];
    var y       = startXY[1];
    var start   = canvas[y][x];
    var coords = [[x, y-1], [x, y+1], [x-1, y], [x+1, y]];

    displayCanvas(canvas);
    console.log('--------------');
    alert("evaluating x: " + x + "y: " + y);
    canvas[y][x] = newColor

    for (var i = 0, length = coords.length; i < length; i++) {
        if (validNode(canvas, coords[i]) == start) {
            floodFill(canvas, coords[i], newColor);
        }
    }

    return canvas;
}

var validNode = function(canvas, coords) {
    var x = coords[0];
    var y = coords[1];

    if (canvas[y] !== undefined && canvas[y][x] !== undefined) {
        return canvas[y][x];
    }

    return false
}

var displayCanvas = function(canvas) {
    for (var i = 0, rows = canvas.length; i < rows; i++) {
        console.log(canvas[i]);
    }
}

displayCanvas(canvas);
console.log('--------------');

canvas = floodFill(canvas, [1, 1], 3);
console.log('--------------');

displayCanvas(canvas);
