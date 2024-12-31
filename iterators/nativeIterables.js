// 1. Array - 遍历值
console.log('1. Array Iterator:');
const array = ['a', 'b', 'c'];
for (const item of array) {
    console.log(item);
}

// 2. String - 遍历字符
console.log('\n2. String Iterator:');
const str = 'hello';
for (const char of str) {
    console.log(char);
}

// 3. Map - 遍历键值对
console.log('\n3. Map Iterator:');
const map = new Map([
    ['name', 'John'],
    ['age', 30]
]);
for (const entry of map) {
    console.log(entry); // 输出 [key, value] 数组
}
// Map的其他迭代方法
console.log('\nMap.keys():');
for (const key of map.keys()) {
    console.log(key);
}
console.log('\nMap.values():');
for (const value of map.values()) {
    console.log(value);
}

// 4. Set - 遍历值
console.log('\n4. Set Iterator:');
const set = new Set(['apple', 'banana', 'apple']); // 注意重复值会被去除
for (const item of set) {
    console.log(item);
}

// 5. TypedArray - 遍历值
console.log('\n5. TypedArray Iterator:');
const int32Array = new Int32Array([1, 2, 3, 4]);
for (const num of int32Array) {
    console.log(num);
}

// 6. Arguments 对象 (函数内可用)
function testArguments() {
    console.log('\n6. Arguments Iterator:');
    for (const arg of arguments) {
        console.log(arg);
    }
}
testArguments('a', 'b', 'c');

// 7. NodeList (DOM API)
console.log('\n7. NodeList Iterator (在浏览器环境中可用):');
// 在Node环境下无法演示，但在浏览器中可以这样使用：
// const nodes = document.querySelectorAll('div');
// for (const node of nodes) {
//     console.log(node);
// }

// 检查迭代器
console.log('\n检查各个对象的迭代器:');
console.log('Array has iterator:', !!array[Symbol.iterator]);
console.log('String has iterator:', !!str[Symbol.iterator]);
console.log('Map has iterator:', !!map[Symbol.iterator]);
console.log('Set has iterator:', !!set[Symbol.iterator]);
console.log('TypedArray has iterator:', !!int32Array[Symbol.iterator]);

// 手动使用迭代器
console.log('\n手动使用数组迭代器:');
const iterator = array[Symbol.iterator]();
console.log(iterator.next()); // { value: 'a', done: false }
console.log(iterator.next()); // { value: 'b', done: false }
console.log(iterator.next()); // { value: 'c', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// 注意：以下原生对象没有迭代器：
// - 普通对象（Object）
// - WeakMap
// - WeakSet

// 演示普通对象没有迭代器
const obj = { a: 1, b: 2 };
console.log('\n普通对象:');
console.log('Object has iterator:', !!obj[Symbol.iterator]);
// 以下代码会抛出错误：
// for (const item of obj) {
//     console.log(item);
// }

// 但可以使用 Object.entries() 来遍历对象
console.log('\n使用 Object.entries() 遍历对象:');
for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
}
