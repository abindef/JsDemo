// 1. 基本的 Promise 链
console.log('1. Promise 链示例：');
Promise.resolve()
    .then(() => {
        console.log('第一个 then');
        return 'First';
    })
    .then(result => {
        console.log('第二个 then，上一个结果：', result);
        return Promise.resolve('Second');
    })
    .then(result => {
        console.log('第三个 then，上一个结果：', result);
    });

// 2. Promise.all
console.log('\n2. Promise.all 示例：');
const promise1 = Promise.resolve('First Promise');
const promise2 = new Promise(resolve => setTimeout(() => resolve('Second Promise'), 100));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Third Promise'), 50));

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log('所有 Promise 完成：', results);
    });

// 3. async/await 与 Promise 混用
console.log('\n3. async/await 与 Promise 混用：');
async function example() {
    console.log('开始 async 函数');
    
    const result1 = await Promise.resolve('Result 1');
    console.log('await 结果 1:', result1);
    
    const result2 = await new Promise(resolve => {
        setTimeout(() => resolve('Result 2'), 0);
    });
    console.log('await 结果 2:', result2);
    
    return 'Finished';
}

example().then(result => console.log('async 函数完成:', result));

// 4. Promise 错误处理
console.log('\n4. Promise 错误处理：');
Promise.resolve()
    .then(() => {
        throw new Error('发生错误');
    })
    .catch(error => {
        console.log('捕获错误:', error.message);
        return 'Error handled';
    })
    .then(result => {
        console.log('错误处理后继续:', result);
    });

// 5. Promise.race
console.log('\n5. Promise.race 示例：');
const fast = new Promise(resolve => setTimeout(() => resolve('快速完成'), 50));
const slow = new Promise(resolve => setTimeout(() => resolve('慢速完成'), 100));

Promise.race([fast, slow])
    .then(result => console.log('最先完成的是:', result));

// 6. 嵌套的 Promise
console.log('\n6. 嵌套的 Promise：');
new Promise(resolve => {
    console.log('外层 Promise 开始');
    resolve('外层');
})
.then(result => {
    console.log('外层 then:', result);
    return new Promise(resolve => {
        console.log('内层 Promise 开始');
        resolve('内层');
    }).then(innerResult => {
        console.log('内层 then:', innerResult);
        return '完成';
    });
})
.then(finalResult => {
    console.log('最终结果:', finalResult);
});

// 7. Promise 并发控制
console.log('\n7. Promise 并发控制：');
const tasks = [
    () => new Promise(resolve => setTimeout(() => resolve('任务 1'), 100)),
    () => new Promise(resolve => setTimeout(() => resolve('任务 2'), 50)),
    () => new Promise(resolve => setTimeout(() => resolve('任务 3'), 150))
];

async function runSequentially() {
    console.log('开始顺序执行任务');
    for (const task of tasks) {
        const result = await task();
        console.log('完成任务:', result);
    }
}

runSequentially();
