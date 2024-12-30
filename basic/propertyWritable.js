'use strict'; // 启用严格模式

console.log('1. 非严格模式示例：');
function nonStrictExample() {
    const user = {};
    Object.defineProperty(user, 'name', {
        value: 'Bob',
        writable: false,
        enumerable: true,
        configurable: true
    });

    console.log('初始名字：', user.name);
    user.name = 'Alice'; // 在非严格模式下会静默失败
    console.log('尝试修改后的名字：', user.name);
}

// 在非严格模式下运行
eval('nonStrictExample()');

console.log('\n2. 严格模式示例：');
function strictExample() {
    'use strict';
    const user = {};
    Object.defineProperty(user, 'name', {
        value: 'Bob',
        writable: false,
        enumerable: true,
        configurable: true
    });

    console.log('初始名字：', user.name);
    try {
        user.name = 'Alice'; // 在严格模式下会抛出错误
    } catch (e) {
        console.log('错误：', e.message);
    }
    console.log('尝试修改后的名字：', user.name);
}

// 在严格模式下运行
strictExample();

console.log('\n3. 使用 Object.freeze 示例：');
const frozenUser = Object.freeze({
    name: 'Bob'
});

console.log('初始名字：', frozenUser.name);
try {
    frozenUser.name = 'Alice';
} catch (e) {
    console.log('错误：', e.message);
}
console.log('尝试修改后的名字：', frozenUser.name);
