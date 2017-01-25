for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}
// 每次都会成为一个独立的作用域
