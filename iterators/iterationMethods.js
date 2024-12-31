// 准备示例数据
const array = ['apple', 'banana', 'orange'];
const map = new Map([['name', 'John'], ['age', 30]]);
const set = new Set(['red', 'green', 'blue']);
const obj = { name: 'John', age: 30, city: 'New York' };

console.log('1. 展开运算符 (Spread Operator):');
console.log('Array:', [...array]);
console.log('Map:', [...map]);
console.log('Set:', [...set]);
console.log('String:', [..."hello"]);

console.log('\n2. Array.from():');
console.log('从String创建数组:', Array.from("hello"));
console.log('从Set创建数组:', Array.from(set));
console.log('从Map创建数组:', Array.from(map));
// Array.from还可以接受映射函数
console.log('带映射函数:', Array.from([1, 2, 3], x => x * 2));

console.log('\n3. 解构赋值 (Destructuring):');
const [first, second] = array;
console.log('数组解构:', first, second);
const [mapEntry1] = map;
console.log('Map解构:', mapEntry1);

console.log('\n4. Promise.all() (用于可迭代对象):');
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(values => console.log('Promise.all结果:', values));

console.log('\n5. forEach 方法:');
array.forEach((item, index) => console.log('Array forEach:', index, item));
map.forEach((value, key) => console.log('Map forEach:', key, value));
set.forEach(item => console.log('Set forEach:', item));

console.log('\n6. 其他数组方法 (用于可迭代对象):');
// map
console.log('map:', array.map(x => x.toUpperCase()));
// filter
console.log('filter:', array.filter(x => x.length > 5));
// reduce
console.log('reduce:', array.reduce((acc, curr) => acc + ', ' + curr));

console.log('\n7. Object专用方法:');
console.log('Object.keys():', Object.keys(obj));
console.log('Object.values():', Object.values(obj));
console.log('Object.entries():', Object.entries(obj));

console.log('\n8. for...in (用于对象属性):');
for (const key in obj) {
    console.log('for...in:', key, obj[key]);
}

console.log('\n9. Generator函数:');
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = numberGenerator();
for (const num of gen) {
    console.log('Generator value:', num);
}

console.log('\n10. 使用迭代器方法:');
const arrayIterator = array[Symbol.iterator]();
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

console.log('\n11. Array专用方法:');
// some
console.log('some:', array.some(x => x.length > 5));
// every
console.log('every:', array.every(x => x.length > 3));
// find
console.log('find:', array.find(x => x.startsWith('a')));
// findIndex
console.log('findIndex:', array.findIndex(x => x.startsWith('b')));

console.log('\n12. 新的数组方法:');
// at (ES2022)
console.log('at:', array.at(-1)); // 获取最后一个元素

// 13. 异步迭代
console.log('\n13. 异步迭代示例:');
async function* asyncGenerator() {
    yield Promise.resolve(1);
    yield Promise.resolve(2);
    yield Promise.resolve(3);
}

// 使用for await...of
(async () => {
    for await (const value of asyncGenerator()) {
        console.log('Async Iterator value:', value);
    }
})();

// 14. 自定义迭代器
const customIterable = {
    *[Symbol.iterator]() {
        yield 'First';
        yield 'Second';
        yield 'Third';
    }
};

console.log('\n14. 自定义迭代器:');
for (const item of customIterable) {
    console.log('Custom Iterator:', item);
}
