/*for (let i=0;i<10;i++){
console.log(i)
}
var ary=[1,4,5]*/
let obj={name:'xxx',age:44}
for(let [key,value] of Object.entries(obj)){
    console.log(key,`:${value}`)
}
