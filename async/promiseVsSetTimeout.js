console.log('1. 开始');

// setTimeout (宏任务/MacroTask)
setTimeout(() => {
    console.log('2. setTimeout');
}, 0);

// Promise (微任务/MicroTask)
Promise.resolve().then(() => {
    console.log('3. Promise');
});

console.log('4. 结束');

// 更复杂的示例
setTimeout(() => {
    console.log('5. 外层 setTimeout');
    Promise.resolve().then(() => {
        console.log('6. setTimeout 中的 Promise');
    });
}, 0);

Promise.resolve().then(() => {
    console.log('7. 外层 Promise');
    setTimeout(() => {
        console.log('8. Promise 中的 setTimeout');
    }, 0);
});

// 演示 Promise 链
Promise.resolve()
    .then(() => {
        console.log('9. Promise 链 - 1');
        return Promise.resolve();
    })
    .then(() => {
        console.log('10. Promise 链 - 2');
    });

// 使用 async/await
async function demo() {
    console.log('11. async 函数开始');
    await Promise.resolve();
    console.log('12. await 之后');
}

demo();

/*
执行顺序说明：
1. 同步代码最先执行
2. 微任务（Promise、async/await）在当前事件循环的末尾执行
3. 宏任务（setTimeout）在下一个事件循环开始时执行
*/
