// 1. 基本的 Promise 创建和解析
console.log('1. 基本的 Promise 示例：');
const basicPromise = new Promise((resolve, reject) => {
    console.log('Promise 执行器运行');
    // resolve 将 Promise 状态设置为 fulfilled（完成）
    resolve('成功的结果');
});

basicPromise.then(result => {
    console.log('接收到的结果:', result);
});

// 2. resolve 的值会传递给 then
console.log('\n2. resolve 值传递示例：');
new Promise(resolve => {
    // resolve 可以传递任何类型的值
    resolve({ message: 'Hello', code: 200 });
})
.then(data => {
    console.log('收到的对象:', data);
    // then 可以返回新的值
    return data.message;
})
.then(message => {
    console.log('提取的消息:', message);
});

// 3. resolve 另一个 Promise
console.log('\n3. resolve Promise 示例：');
new Promise(resolve => {
    // resolve 一个 Promise
    resolve(Promise.resolve('嵌套的 Promise'));
})
.then(result => {
    console.log('解析嵌套 Promise:', result);
});

// 4. then 的链式调用
console.log('\n4. then 链式调用示例：');
new Promise(resolve => {
    resolve(1);
})
.then(num => {
    console.log('第一个 then:', num);
    return num + 1;
})
.then(num => {
    console.log('第二个 then:', num);
    return new Promise(resolve => {
        // 异步操作
        setTimeout(() => resolve(num + 1), 1000);
    });
})
.then(num => {
    console.log('第三个 then:', num);
});

// 5. resolve 的时机
console.log('\n5. resolve 时机示例：');
new Promise(resolve => {
    console.log('开始');
    resolve('立即 resolve');
    console.log('resolve 之后的代码仍会执行');
})
.then(result => {
    console.log('then 1:', result);
    // 返回 undefined
})
.then(result => {
    console.log('then 2:', result);
});

// 6. 多个 then 的执行
console.log('\n6. 多个 then 示例：');
const promise = new Promise(resolve => resolve('共享结果'));

// 同一个 Promise 可以有多个 then
promise.then(result => {
    console.log('第一个处理器:', result);
});

promise.then(result => {
    console.log('第二个处理器:', result);
});

// 7. then 中的异步操作
console.log('\n7. then 中的异步操作：');
Promise.resolve('开始')
    .then(result => {
        console.log('同步操作:', result);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('异步操作完成');
            }, 1000);
        });
    })
    .then(result => {
        console.log('异步操作结果:', result);
    });

console.log('主代码执行完毕');
