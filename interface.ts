// interface 目的就是定义参数的数据类型 和后台的java go 差不多都需要定义一下输入的参数和返回的参数
interface LabelledVale{
    label:string
}
function printLabel(labelledObj:LabelledVale) {
    console.log(labelledObj.label)
}
const myObj={size:10,label:'size 10 object'};
printLabel(myObj)
interface SquareConfig{
    color?:string,
    width?:number
}
type res={color:string,area:number}
function createSquare(config:SquareConfig):res{
    let newSquare = {color: "white", area: 100};
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
let mySquare = createSquare({coloxr: "black"} as SquareConfig);
console.log('mySquare',mySquare)