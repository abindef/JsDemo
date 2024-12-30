// 1. 基本类型（值传递）示例
console.log('1. 基本类型（值传递）：');
let number = 42;
let string = 'hello';
let boolean = true;

// 复制基本类型值
let number2 = number;
let string2 = string;
let boolean2 = boolean;

// 修改副本
number2 = 100;
string2 = 'world';
boolean2 = false;

console.log('原始值：', number, string, boolean);
console.log('修改后的副本：', number2, string2, boolean2);

// 2. 对象（引用传递）示例
console.log('\n2. 对象（引用传递）：');
let obj1 = { name: 'Alice', age: 25 };
let obj2 = obj1; // 创建引用

console.log('修改前：');
console.log('obj1:', obj1);
console.log('obj2:', obj2);

obj2.name = 'Bob'; // 修改obj2会影响obj1

console.log('\n修改后：');
console.log('obj1:', obj1);
console.log('obj2:', obj2);

// 3. 数组（引用传递）示例
console.log('\n3. 数组（引用传递）：');
let arr1 = [1, 2, 3];
let arr2 = arr1; // 创建引用

console.log('修改前：');
console.log('arr1:', arr1);
console.log('arr2:', arr2);

arr2.push(4); // 修改arr2会影响arr1

console.log('\n修改后：');
console.log('arr1:', arr1);
console.log('arr2:', arr2);

// 4. 对象深拷贝示例
console.log('\n4. 对象深拷贝：');
let originalObj = {
    name: 'Alice',
    age: 25,
    address: {
        city: 'Shanghai',
        street: 'Nanjing Road'
    }
};

// 使用JSON方法进行深拷贝
let deepCopyObj = JSON.parse(JSON.stringify(originalObj));
// 使用展开运算符进行浅拷贝
let shallowCopyObj = { ...originalObj };

console.log('修改前：');
console.log('原始对象：', originalObj);
console.log('深拷贝：', deepCopyObj);
console.log('浅拷贝：', shallowCopyObj);

// 修改嵌套属性
deepCopyObj.address.city = 'Beijing';
shallowCopyObj.address.city = 'Guangzhou';

console.log('\n修改后：');
console.log('原始对象：', originalObj);
console.log('深拷贝：', deepCopyObj);
console.log('浅拷贝：', shallowCopyObj);

// 5. 函数参数传递示例
console.log('\n5. 函数参数传递：');
function modifyValues(num, obj) {
    num = 100;
    obj.value = 100;
}

let testNum = 42;
let testObj = { value: 42 };

console.log('调用函数前：');
console.log('数字：', testNum);
console.log('对象：', testObj);

modifyValues(testNum, testObj);

console.log('\n调用函数后：');
console.log('数字：', testNum);
console.log('对象：', testObj);
