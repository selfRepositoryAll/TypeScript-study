var ary = [1, 3, 4];
//alert(ary)
// 数组 和元组(知道数组里面的类型)
var x;
x = ['xxx', 10];
console.log(x[0].substr(1));
//console.log(x[1].substr(1));//确实给力 编辑器直接提示没有这个方法
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
