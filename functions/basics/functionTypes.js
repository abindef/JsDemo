// 1. 函数声明
console.log('1. 函数声明：');
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice'));

// 2. 函数表达式
console.log('\n2. 函数表达式：');
const sayHello = function(name) {
    return `Hi, ${name}!`;
};
console.log(sayHello('Bob'));

// 3. 箭头函数
console.log('\n3. 箭头函数：');
const add = (a, b) => a + b;
console.log('2 + 3 =', add(2, 3));

// 带有多行语句的箭头函数
const multiply2 = (a, b) => {
    const result = a * b;
    return result;
};
console.log('4 * 5 =', multiply2(4, 5));

// 4. 立即执行函数表达式（IIFE）
console.log('\n4. 立即执行函数：');
(function() {
    const secret = 'hidden value';
    console.log('IIFE executed:', secret);
})();

// 5. 构造函数
console.log('\n5. 构造函数：');
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        return `I am ${this.name}, ${this.age} years old.`;
    };
}

const person = new Person('Charlie', 30);
console.log(person.introduce());

// 6. 方法（对象中的函数）
console.log('\n6. 对象方法：');
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    // 简写方式
    subtract(a, b) {
        return a - b;
    }
};

console.log('5 + 3 =', calculator.add(5, 3));
console.log('5 - 3 =', calculator.subtract(5, 3));

// 7. 生成器函数
console.log('\n7. 生成器函数：');
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
for (const num of gen) {
    console.log('Generated number:', num);
}

// 8. 异步函数
console.log('\n8. 异步函数：');
async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

fetchData().then(result => console.log('Async result:', result));

// 9. 回调函数
console.log('\n9. 回调函数：');
function processData(callback) {
    const data = 'Processed';
    callback(data);
}

processData(function(result) {
    console.log('Callback result:', result);
});

// 10. 高阶函数
console.log('\n10. 高阶函数：');
function multiply(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiply(2);
const triple = multiply(3);

console.log('Double 5:', double(5));
console.log('Triple 5:', triple(5));

// 11. 类中的方法
console.log('\n11. 类中的方法：');
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound`;
    }

    static create(name) {
        return new Animal(name);
    }
}

const dog = Animal.create('Dog');
console.log(dog.speak());
