function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'size 10 object' };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
//最简便的方法是使用类型断言  coloxr 没有对这个属性做处理
var mySquare = createSquare({ coloxr: "black" });
console.log('mySquare', mySquare);
