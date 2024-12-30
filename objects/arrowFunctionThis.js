// 1. 普通函数中的箭头函数
console.log('1. 普通函数中的箭头函数：');
function Counter() {
    this.count = 0;
    
    // 普通方法
    this.increment = function() {
        console.log('普通方法 this.count:', this.count);
    };
    
    // 箭头函数
    this.arrowIncrement = () => {
        console.log('箭头函数 this.count:', this.count);
    };
}

const counter = new Counter();
const { increment, arrowIncrement } = counter;

console.log('直接调用方法：');
counter.increment();      // 正常工作
counter.arrowIncrement(); // 正常工作

console.log('\n解构后调用：');
increment();             // this 丢失
arrowIncrement();        // 正常工作

// 2. 类中的箭头函数
console.log('\n2. 类中的箭头函数：');
class Calculator {
    constructor() {
        this.value = 0;
        
        // 箭头函数作为类字段
        this.arrowAdd = () => {
            console.log('箭头函数 this.value:', this.value);
        };
    }
    
    // 普通方法
    add() {
        console.log('普通方法 this.value:', this.value);
    }
}

const calc = new Calculator();
const { add, arrowAdd } = calc;

console.log('直接调用方法：');
calc.add();       // 正常工作
calc.arrowAdd();  // 正常工作

console.log('\n解构后调用：');
add();           // this 丢失
arrowAdd();      // 正常工作

// 3. 解释作用域差异
console.log('\n3. 作用域差异示例：');
const globalObj = {
    value: 'global'
};

function RegularFunction() {
    this.value = 'regular';
    
    // 箭头函数在定义时就确定了 this
    this.arrowMethod = () => {
        console.log('箭头函数 this.value:', this.value);
    };
    
    // 普通函数的 this 在调用时确定
    this.regularMethod = function() {
        console.log('普通函数 this.value:', this.value);
    };
}

const regular = new RegularFunction();
const { arrowMethod, regularMethod } = regular;

// 改变调用上下文
console.log('使用 call 改变上下文：');
arrowMethod.call(globalObj);    // 仍然输出 'regular'
regularMethod.call(globalObj);  // 输出 'global'

// 4. 类中的字段初始化
console.log('\n4. 类字段初始化：');
class Example {
    // 类字段中的箭头函数
    autoBound = () => {
        console.log('自动绑定的 this:', this.constructor.name);
    };
    
    // 普通方法
    notBound() {
        console.log('未绑定的 this:', this?.constructor?.name);
    }
}

const example = new Example();
const { autoBound, notBound } = example;

console.log('解构后调用：');
autoBound();  // 保持绑定
notBound();   // this 丢失
