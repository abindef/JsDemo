// 1. 基本的闭包示例
console.log('1. 基本闭包示例：');
function createCounter() {
    let count = 0;  // 这个变量被闭包捕获
    
    return function() {
        return ++count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log('counter1:', counter1()); // 1
console.log('counter1:', counter1()); // 2
console.log('counter2:', counter2()); // 1 (独立的闭包)

// 2. 异步操作中的闭包
console.log('\n2. 异步操作中的闭包：');
for (var i = 0; i < 3; i++) {
    // 错误的方式：所有定时器共享同一个 i
    setTimeout(() => {
        console.log('错误方式 - i:', i);
    }, 100);
}

for (let j = 0; j < 3; j++) {
    // 正确的方式：每次迭代创建新的作用域
    setTimeout(() => {
        console.log('正确方式 - j:', j);
    }, 100);
}

// 3. 函数执行上下文和闭包
console.log('\n3. 函数执行上下文和闭包：');
function outer() {
    let x = 10;
    
    function inner() {
        let y = 20;
        console.log('x + y =', x + y);
    }
    
    return inner;
}

const innerFunc = outer();
innerFunc(); // 可以访问 outer 中的 x

// 4. 闭包与立即执行函数（IIFE）
console.log('\n4. 闭包与IIFE：');
const modules = (function() {
    let privateVar = 0;
    
    return {
        increment: function() {
            return ++privateVar;
        },
        getCount: function() {
            return privateVar;
        }
    };
})();

console.log('当前计数:', modules.getCount()); // 0
console.log('增加后:', modules.increment());   // 1
console.log('再次获取:', modules.getCount());  // 1

// 5. 闭包中的变量更新
console.log('\n5. 闭包中的变量更新：');
function createFunctions() {
    const funcs = [];
    
    // 使用 let 创建块级作用域
    for (let i = 0; i < 3; i++) {
        funcs.push(function() {
            console.log('当前值:', i);
        });
    }
    
    return funcs;
}

const functions = createFunctions();
functions.forEach(func => func());

// 6. 闭包与回调函数
console.log('\n6. 闭包与回调函数：');
function fetchData(callback) {
    let data = 'Initial';
    
    setTimeout(() => {
        data = 'Updated';
        callback(data); // 闭包捕获了 data
    }, 100);
    
    console.log('当前数据:', data);
}

fetchData(result => {
    console.log('回调中的数据:', result);
});

// 7. 闭包内存管理
console.log('\n7. 闭包内存管理：');
function heavyOperation() {
    const largeData = new Array(1000).fill('data');
    
    return function() {
        console.log('数据长度:', largeData.length);
        // largeData 会一直保持在内存中
    };
}

const operation = heavyOperation();
operation(); // 访问闭包中的数据
