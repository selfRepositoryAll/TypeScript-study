//可以看生成的js就知道了 name，width height是constructor私有的变量  area 和color 是私有属性
class Shape {

    area: number;
    private color: string;// 这个位置如果是私有的private 定义类型

    constructor (public name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };

    shoutout() {
        return "I'm " + this.color + " " + this.name +  " with an area of " + this.area + " cm squared.";
    }
}
//构造器中参数(name, width 和 height) 的作用域是局部变量
var square = new Shape("square", 30, 30);

console.log( square.shoutout() );
console.log( 'Area of Shape: ' + square.area );
console.log( 'Name of Shape: ' + square.name );
console.log( 'Color of Shape: ' + square.color );
console.log( 'Width of Shape: ' + square.width );
console.log( 'Height of Shape: ' + square.height );